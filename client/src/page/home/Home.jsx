import"./home.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Problem from "../../components/problem/Problem"
export default function Home() {
  return (
    <div className="home">
        <Problem />
        <Sidebar />
    </div>
  )
}
