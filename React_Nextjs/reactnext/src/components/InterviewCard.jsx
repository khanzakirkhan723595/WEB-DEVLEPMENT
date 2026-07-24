// InterviewCard Component
// Receives data using Props.

function InterviewCard({ role, difficulty }) {

    return (

        <div>

            <h2>{role}</h2>

            <p>

                Difficulty : {difficulty}

            </p>

        </div>

    );

}

export default InterviewCard;