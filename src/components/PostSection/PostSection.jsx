import { fetchToken } from 'api';
import { useEffect, useState } from 'react';
import {
  ErrorMsg,
  RadioField,
  Section,
  StyledField,
  StyledForm,
  Legend,
  RadioWrap,
  RadioContainer,
  RadioBox,
  FileInputContainer,
  UploadButton,
  Label,
  FileField,
} from './PostSection.styled';
import { Title } from 'components/GetSection/GetSection.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { Btn } from 'components/Header/Header.styled';

export const PostSection = () => {
  const [token, setToken] = useState('');
  const [error, setError] = useState(false);
  const [photo, setPhoto] = useState(new File([], ''));

  useEffect(() => {
    async function getToken() {
      try {
        const { token } = await fetchToken();
        setToken(token);
        console.log(token);
      } catch (error) {
        console.log(error);
      }
    }
    getToken();
  }, []);

  const handlePhotoChange = event => {
    const file = event.currentTarget.files[0];
    setPhoto(file);
  };

  useEffect(() => {
    console.log(photo);
  }, [photo]);

  const handleSubmit = async (values, { setSubmitting }) => {
    if (!photo) {
      console.log('No file selected');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('position_id', values.position);
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      formData.append('photo', photo);
      console.log('Sending request...');
      console.log(
        'URL:',
        'https://frontend-test-assignment-api.abz.agency/api/v1/users'
      );
      console.log('Method:', 'POST');
      console.log('Data:', formData);
      const response = await fetch(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users',
        {
          method: 'POST',
          body: formData,
          headers: {
            Token: token,
          },
        }
      );

      const data = await response.json();
      console.log('Response:', data);

      if (data.success) {
        console.log('Request was successful');
      } else {
        console.log('Server error');
      }
    } catch (error) {
      console.error('Network error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section id="post">
      <Title>Working with POST request</Title>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          position: '',
          photo: '',
        }}
        validationSchema={Yup.object({
          position: Yup.number().required('Required'),
          name: Yup.string()
            .required('Required')
            .min(2, 'Should be at least 2 characters')
            .max(60, 'Should be at most 60 characters'),
          email: Yup.string()
            .email('Invalid email')
            .required('Required')
            .min(2, 'Should be at least 2 characters')
            .max(100, 'Should be at most 100 characters')
            .matches(
              /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[^"\\]|\\[\x01-\x08\x0b\x0c\x0d\x1f-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0d\x1f-\x21\x23-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0d\x1f-\x7f])+)\])$/,
              'Invalid email address'
            ),
          phone: Yup.string()
            .required('Required')
            .matches(/^[\+]{0,1}380([0-9]{9})$/, 'Invalid phone number'),
          photo: Yup.mixed()
            .required('Photo is required')
            .test(
              'fileSize',
              'File size is too large, maximum size is 5MB',
              value => value && value.size <= 5 * 1024 * 1024
            )
            .test(
              'fileType',
              'File type must be JPEG or JPG',
              value => value && ['image/jpeg', 'image/jpg'].includes(value.type)
            ),
        })}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledField name="name" type="text" placeholder="Your name" />
          <ErrorMsg name="name" component="div" />
          <StyledField name="email" type="email" placeholder="Email" />
          <ErrorMsg name="email" component="div" />
          <StyledField name="phone" type="tel" placeholder="Phone" />
          <p>+38XXXXXXXXXX</p>
          <ErrorMsg name="phone" component="div" />

          <RadioContainer>
            <Legend>Select your position</Legend>
            <RadioBox>
              <RadioWrap>
                <RadioField
                  type="radio"
                  id="frontend"
                  name="position"
                  value="5"
                />
                <label htmlFor="frontend">Frontend developer</label>
              </RadioWrap>
              <RadioWrap>
                <RadioField
                  type="radio"
                  id="backend"
                  name="position"
                  value="6"
                />
                <label htmlFor="backend">Backend developer</label>
              </RadioWrap>
              <RadioWrap>
                <RadioField
                  type="radio"
                  id="designer"
                  name="position"
                  value="4"
                />
                <label htmlFor="designer">Designer</label>
              </RadioWrap>
              <RadioWrap>
                <RadioField type="radio" id="qa" name="position" value="7" />
                <label htmlFor="qa">QA</label>
              </RadioWrap>
            </RadioBox>
            <ErrorMsg name="position" component="div" />
          </RadioContainer>

          <FileInputContainer>
            <UploadButton htmlFor="file-upload">Upload</UploadButton>
            <FileField
              id="file-upload"
              name="photo"
              type="file"
              onChange={handlePhotoChange}
            />
            <Label>Upload your photo</Label>
            <ErrorMsg name="photo" component="div" />
          </FileInputContainer>
          {/* <Btn
            type="submit"
            style={{
              color: '#fff',
              backgroundColor: '#B4B4B4',
              margin: '0 auto',
            }}
          >
            Sign up
          </Btn> */}
          <button type="submit">Sign up</button>
        </StyledForm>
      </Formik>
    </Section>
  );
};
