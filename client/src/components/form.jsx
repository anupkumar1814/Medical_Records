import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { addRecord, getRecord } from '../service/api';

import favicon from '../img/favicon.ico';

const StyledForm = styled.form`
  max-width: 40%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color:  rgb(173, 216, 230);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  margin-right: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;



const Container = styled.div`
  padding: 20px;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #007bff;
`;

const TableWrapper = styled.div`
  margin: auto;
  width: 90%; /* Adjust as needed */
  overflow-x: auto;
  max-height: 400px; /* Adjust max-height as needed */
  border: 2px solid #007bff;
`;

const Table = styled.table`
  border-collapse: collapse;
  min-width: 100%; /* Take full width */
  border-radius: 5px;
  position: relative;
  overflow-x: auto;
`;
const Th = styled.th`
  width: 20%; /* Adjust width as needed */
  border: 1px solid #dddddd;
  text-align: center;
  padding: 15px;
  background-color: #f2f2f2;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Td = styled.td`
  width: 20%; /* Adjust width as needed */
  border: 1px solid #dddddd;
  text-align: center;
  padding: 2px;
`;

const MusicControl = styled.audio`
  width: 100%;
  display: block;
  margin-top: 6px;

  /* Customize audio controls */
  &::-webkit-media-controls-panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 5px;
  }

  /* Customize progress bar */
  &::-webkit-media-controls-current-time-display,
  &::-webkit-media-controls-time-remaining-display {
    font-size: 14px;
    color: #333;
    margin: 0 5px;
  }

  &::-webkit-media-controls-seek-back-button,
  &::-webkit-media-controls-seek-forward-button {
    display: none;
  }

  &::-webkit-media-controls-volume-slider {
    display: none;
  }
`;


const TableRow = styled.tr`
  background-color: ${(props) => (props.even ? '#f9f9f9' : '#ffffff')};
`;
const LoadingMessage = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: red; /* Adjust color as needed */
`;

const Gap = styled.div`
  margin-bottom: 20px; /* Adjust the value as needed for the desired amount of space */
`;
const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 70px; /* Adjust size as needed */
  height: 70px;
  border-radius: 10%;
`;

const Form = () => {
  const [doctorName, setDoctorName] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [recordingDate, setRecordingDate] = useState('');
  const [filename, setFilename] = useState('');
  const [soundFile, setSoundFile] = useState(null);

  const [loadingAddRecord, setLoadingAddRecord] = useState(false);
  const [addRecordCompleted, setAddRecordCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!addRecordCompleted) {
        try {
          const response = await getRecord();
          setRecords(response);
          // setLoadingAddRecord(false);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching records:', error);
        }
      }
    };
    fetchData();
  }, [addRecordCompleted]);

  useEffect(() => {
    const fetchData = async () => {
      if (addRecordCompleted) {
        setLoading(true);
        try {
          const response = await getRecord();
          setRecords(response);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching records:', error);
        }
      }
    };
    fetchData();
  }, [addRecordCompleted]);

  const handleSubmit = async (event) => {

    setAddRecordCompleted(false);
    event.preventDefault();
    const data = {
      doctorName: doctorName,
      patientName: patientName,
      patientAge: patientAge,
      recordingDate: recordingDate,
      fileName: filename,
      soundFile: soundFile,
    };
    setLoadingAddRecord(true);
    await addRecord(data);
    setLoadingAddRecord(false);
    setAddRecordCompleted(true);
    setDoctorName('');
    setPatientName('');
    setPatientAge('');
    setRecordingDate('');
    setSoundFile(null);
    setFilename('');
    const fileInput = document.getElementById('soundFile');
    if (fileInput) {
      fileInput.value = '';
    }
  };
  // Add a condition to show loading message

  const base64encode = (e) => {
    setFilename(e.target.files[0].name);

    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setSoundFile(reader.result);
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  };

  return (
    <Container>
      <Logo src={favicon} alt="Logo" />
      <Heading>ENTER MEDICAL RECORD</Heading>
      <StyledForm onSubmit={handleSubmit} encType='multipart/form-data'>
        <FormGroup>
          <Label htmlFor="doctorName">Doctor's Name:</Label>
          <Input type="text" id="doctorName" value={doctorName} onChange={(e) => setDoctorName(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="patientName">Patient's Name:</Label>
          <Input type="text" id="patientName" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="patientAge">Patient's Age:</Label>
          <Input type="number" id="patientAge" value={patientAge} onChange={(e) => setPatientAge(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="recordingDate">Date of Recording:</Label>
          <Input type="date" id="recordingDate" value={recordingDate} onChange={(e) => setRecordingDate(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="soundFile">Upload Sound File:</Label>
          <Input type="file" id="soundFile" onChange={base64encode} accept="audio/*" required />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </StyledForm>
      <Gap />
      {loading ? (
        <LoadingMessage>Please wait while we retrieve the updated records...</LoadingMessage>
      ) : (
        <>
          {loadingAddRecord ? (
            <LoadingMessage>Please wait while we add the record to the table...</LoadingMessage>
          ) : (
            <>
              <Heading>List of Records</Heading>
              <TableWrapper>
                <Table>
                  <thead>
                    <tr>
                      <Th>Doctor's Name</Th>
                      <Th>Patient's Name</Th>
                      <Th>Patient's Age</Th>
                      <Th>Recording Date</Th>
                      <Th>Audio</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {records.map((record, index) => (
                      <TableRow key={index} even={index % 2 === 0}>
                        <Td>{record.doctorName}</Td>
                        <Td>{record.patientName}</Td>
                        <Td>{record.patientAge}</Td>
                        <Td>{new Date(record.recordingDate).toISOString().split('T')[0]}</Td>
                        <Td>
                          <MusicControl controls>
                            <source src={record.soundFile} type='audio/mpeg' />
                            Your browser does not support the audio element.
                          </MusicControl>
                        </Td>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
              </TableWrapper>
            </>
          )
          }


        </>
      )}
    </Container>
  );
};

export default Form;
