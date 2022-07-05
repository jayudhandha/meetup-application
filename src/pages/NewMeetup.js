import { useNavigate } from "react-router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  const navigate = useNavigate();
  function onAddMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-cbcc5-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h1>
        <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
      </h1>
    </section>
  );
}

export default NewMeetupsPage;
