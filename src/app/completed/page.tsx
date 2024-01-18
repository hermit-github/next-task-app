import MainContainer from "@/Components/TaskApp/MainContainer";
import Tasks from "@/Components/TaskApp/Tasks";

export default function CompletedPage() {
    return (
      <MainContainer title="Completed Tasks">
        <Tasks type="completed"/>
      </MainContainer>
    )
  }