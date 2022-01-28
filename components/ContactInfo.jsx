import Heading from "./Heading";

const ContactInfo = ({ contact }) => {
  const { name, email, address } = contact;
  const { street, city, zipcode, suite } = address;

  if (!contact) {
    return <Heading tag="h3" text="Empty" />;
  }

  return (
    <>
      <Heading tag="h3" text={name} />
      <div>
        <strong>Email:</strong>
        {email}
      </div>
      <div>
        <strong>Address:</strong>
        {`${street} ${city} ${suite} ${zipcode}`}
      </div>
    </>
  );
};

export default ContactInfo;
