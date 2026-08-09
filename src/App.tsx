import { TaskCard } from "./components/task-card";


export default function App() {
  return(
    <div

      className="p-12"
    >
      <TaskCard
        title="Design systems meetup"
        category="Featured"
        description="A practical talk on component APIs, accessibility, and shipping faster."
      />
    </div>
  )
}