import MainContainer from "@/Components/TaskApp/MainContainer";
import Tasks from "@/Components/TaskApp/Tasks";

export default function TasksPage() {
  return (
    <MainContainer title="All Tasks">
      <Tasks type="all"/>
    </MainContainer>
  )
}
