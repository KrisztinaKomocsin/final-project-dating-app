import { css } from '@emotion/react';
import { useState } from 'react';

const formWrapper = css`
  font-family: Emilys candy;

  h1 {
    text-align: center;
  }

  section {
    display: flex;
    flex-direction: column;
    margin: 0px 100px;
    padding: 20px;
    width: 300px;
  }

  input {
    margin: 10px 0;
    font-size: 15px;
    border-radius: 20px;
    padding: 10px;
  }

  textarea {
    border: none;
  }

  select {
    border-radius: 20px;
    padding: 10px;
  }
`;

const formButton = css`
  color: #fff;
  text-transform: uppercase;
  font-size: 10px;
  font-family: Emilys candy;
  background: linear-gradient(45deg, #924694, #fc46e7);
  padding: 20px;
  border-radius: 50px;
  border: none;
  position: absolute;
  bottom: 100px;
  right: 70px;
`;

const formPhoto = css`
  background: url('homepage.jpg');
  width: 40vw;
  height: 100vh;
`;

export default function Form() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [location, setLocation] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [gender, setGender] = useState();
  const [interest, setInterest] = useState();
  const [description, setDescription] = useState();

  return (
    <div>
      <div css={formPhoto}>
        <div css={formWrapper}>
          <h1>CREATE ACCOUNT</h1>

          <form>
            <section>
              <label htmlFor="first_name">First Name</label>
              <input
                placeholder="Please type"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.currentTarget.value);
                }}
              />

              <label htmlFor="last_name">Last Name</label>
              <input
                placeholder="Please type"
                value={lastName}
                onChange={(event) => {
                  setLastName(event.currentTarget.value);
                }}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Please type"
                value={email}
                onChange={(event) => {
                  setEmail(event.currentTarget.value);
                }}
              />

              <label htmlFor="location">Location</label>
              <input
                placeholder="Please type"
                value={location}
                onChange={(event) => {
                  setLocation(event.currentTarget.value);
                }}
              />

              <label htmlFor="dob">Birthday</label>
              <input
                type="date"
                placeholder="DD/MM/YYYY"
                value={dateOfBirth}
                onChange={(event) => {
                  setDateOfBirth(event.currentTarget.value);
                }}
              />

              <label htmlFor="gender">I am:</label>
              <select
                placeholder="Please choose"
                value={gender}
                onChange={(event) => {
                  setGender(event.currentTarget.value);
                }}
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
              <br />
              <label htmlFor="interest">I am looking for:</label>
              <select
                placeholder="Please choose"
                value={interest}
                onChange={(event) => {
                  setInterest(event.currentTarget.value);
                }}
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="more">Everyone</option>
              </select>
            </section>

            <section>
              <label htmlFor="description">About me</label>
              <textarea
                maxlength="300"
                rows="5"
                placeholder="Please type"
                value={description}
                onChange={(event) => {
                  setDescription(event.currentTarget.value);
                }}
              />
            </section>
            <section>
              <div>For photos</div>
            </section>

            <button css={formButton} type="Submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
