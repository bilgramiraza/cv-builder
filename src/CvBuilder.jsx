import InputGroup from "./components/InputGroup";

function CvBuilder() {
  return (
    <main>
      <form>
        <h3>Personal Details</h3>
        <InputGroup inputType="text" inputName="firstName" inputLabel="First Name" />
        <InputGroup inputType="text" inputName="firstName" inputLabel="First Name" />
        <InputGroup inputType="email" inputName="email" inputLabel="Email" />
        <h3>Education</h3>
        <InputGroup inputType="text" inputName="jobTitle" inputLabel="Job Title" />
        <InputGroup inputType="number" inputName="jobExp" inputLabel="Job Experience(YOE)" />
        <h3>Experience</h3>
        <InputGroup inputType="text" inputName="eduTitle" inputLabel="Education Title" />
        <InputGroup inputType="number" inputName="eduExp" inputLabel="Education Experience(YOE)" />
      </form>
    </main>
  );
}

export default CvBuilder;
