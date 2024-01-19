import MainContainer from "@/Components/TaskApp/MainContainer";
import Tasks from "@/Components/TaskApp/Tasks";

export default function ImportantPage() {
    return (
      <MainContainer title="Important Tasks">
        <Tasks type="important"/>
      </MainContainer>
    )
  }