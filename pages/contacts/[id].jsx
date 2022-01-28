import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";

const Contact = ({ contact }) => {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact: data },
  };
};

export default Contact;
