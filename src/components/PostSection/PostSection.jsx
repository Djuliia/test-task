import { createUser, fetchToken } from 'api';
import { useEffect, useRef, useState } from 'react';
import {
  ErrorMsg,
  RadioField,
  Section,
  StyledForm,
  Legend,
  RadioWrap,
  RadioContainer,
  RadioBox,
  FileInputContainer,
  UploadButton,
  Label,
  BtnSubmit,
  StyledTextField,
} from './PostSection.styled';
import { Title } from 'components/GetSection/GetSection.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

export const PostSection = () => {
  const [token, setToken] = useState('');
  const fileRef = useRef(null);

  useEffect(() => {
    async function getToken() {
      try {
        const { token } = await fetchToken();
        setToken(token);
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    }
    getToken();
  }, []);

  const handleUploadPhoto = async event => {
    fileRef.current.click();
  };

  const handleSubmit = async values => {
    createUser(token, values);

    // try {'
    //   const formData = new FormData();
    //   formData.append('position_id', values.position);
    //   formData.append('name', values.name);
    //   formData.append('email', values.email);
    //   formData.append('phone', values.phone);
    //   formData.append('photo', values.photo);

    //   const response = await fetch(
    //     'https://frontend-test-assignment-api.abz.agency/api/v1/users',
    //     {
    //       method: 'POST',
    //       body: formData,
    //       headers: {
    //         Token: token,
    //       },
    //     }
    //   );

    //   const data = await response.json();

    //   if (data.success) {
    //     toast.success('Request was successful');
    //   } else {
    //     toast.error(data.message || 'Server error');
    //   }
    // } catch (error) {
    //   toast.error(error.message);
    // }
  };

  function truncateFileName(fileName, maxLength) {
    if (fileName.length <= maxLength) {
      return fileName;
    } else {
      const truncatedName = fileName.substring(0, maxLength - 3) + '...';
      return truncatedName;
    }
  }

  const validationSchema = Yup.object().shape({
    position: Yup.number().required('Required'),
    name: Yup.string()
      .min(2, 'Should be at least 2 characters')
      .max(60, 'Should be at most 60 characters')
      .required('Required'),
    email: Yup.string()
      .min(2, 'Should be at least 2 characters')
      .max(100, 'Should be at most 100 characters')
      // .email('Invalid email')
      .matches(
        // eslint-disable-next-line
        /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[^"\\]|\\[\x01-\x08\x0b\x0c\x0d\x1f-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0d\x1f-\x21\x23-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0d\x1f-\x7f])+)\])$/,
        'Invalid email address'
      )
      .required('Required '),
    phone: Yup.string()
      // eslint-disable-next-line
      .matches(/^[\+]{0,1}380([0-9]{9})$/, 'Invalid phone number')
      .required('Required'),
    photo: Yup.mixed()
      .required('Photo is required')
      .nullable()
      .test(
        'fileType',
        'File type must be JPEG or JPG',
        value =>
          !value || (value && ['image/jpeg', 'image/jpg'].includes(value.type))
      )
      .test(
        'fileSize',
        'File size is too large, maximum size is 5MB',
        value => !value || (value && value.size <= 5 * 1024 * 1024)
      )
      .test(
        'imageSize',
        'Image size must be at least 70x70px',
        function (value) {
          if (!value) return true;
          const image = new Image();
          image.src = window.URL.createObjectURL(value);
          return new Promise((resolve, reject) => {
            image.onload = () => {
              const { naturalWidth, naturalHeight } = image;
              resolve(naturalWidth >= 70 && naturalHeight >= 70);
            };
            image.onerror = () => {
              reject(new Error('Failed to load image'));
            };
          });
        }
      ),
  });

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
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <StyledForm noValidate>
            <StyledTextField
              variant="outlined"
              name="name"
              type="text"
              margin="normal"
              error={errors.name && touched.name}
              label="Your name"
              value={values.name}
              onChange={e => setFieldValue('name', e.target.value)}
              className={`special ${
                errors.name && touched.name ? 'error' : ''
              }`}
            />
            {errors.name && touched.name && (
              <ErrorMsg name="name" component="div" />
            )}
            <StyledTextField
              variant="outlined"
              name="email"
              type="email"
              margin="normal"
              error={errors.email && touched.email}
              label="Email"
              value={values.email}
              className={`special ${
                errors.email && touched.email ? 'error' : ''
              }`}
              onChange={e => setFieldValue('email', e.target.value)}
            />
            {errors.email && touched.email && (
              <ErrorMsg name="email" component="div" />
            )}
            <StyledTextField
              variant="outlined"
              name="phone"
              type="tel"
              margin="normal"
              error={errors.phone && touched.phone}
              label="Phone"
              value={values.phone}
              onChange={e => setFieldValue('phone', e.target.value)}
              helperText={!errors.phone ? '+38XXXXXXXXXX' : null}
              className={`special ${
                errors.phone && touched.phone ? 'error' : ''
              }`}
            />
            {errors.phone && touched.phone && (
              <ErrorMsg name="phone" component="div" />
            )}
            <RadioContainer>
              <Legend>Select your position</Legend>
              <RadioBox>
                <RadioWrap>
                  <RadioField
                    type="radio"
                    id="frontend"
                    name="position"
                    value="1"
                  />
                  <label htmlFor="frontend">Frontend developer</label>
                </RadioWrap>
                <RadioWrap>
                  <RadioField
                    type="radio"
                    id="backend"
                    name="position"
                    value="2"
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
                  <RadioField type="radio" id="qa" name="position" value="3" />
                  <label htmlFor="qa">QA</label>
                </RadioWrap>
              </RadioBox>

              <ErrorMsg name="position" component="div" />
            </RadioContainer>
            <FileInputContainer>
              <UploadButton
                htmlFor="file-upload"
                onClick={handleUploadPhoto}
                className={`special ${
                  errors.photo && touched.photo ? 'error' : ''
                }`}
              >
                Upload
              </UploadButton>
              <input
                ref={fileRef}
                id="file-upload"
                hidden
                type="file"
                onChange={e => {
                  setFieldValue('photo', e.target.files[0]);
                  console.log(values.photo);
                }}
              />
              <Label
                className={`special ${
                  errors.photo && touched.photo ? 'error' : ''
                }`}
              >
                {values.photo
                  ? truncateFileName(values.photo.name, 20)
                  : 'Upload your photo'}
              </Label>
            </FileInputContainer>
            <ErrorMsg name="photo" component="div" />{' '}
            <BtnSubmit type="submit">Sign up</BtnSubmit>
          </StyledForm>
        )}
      </Formik>
    </Section>
  );
};
