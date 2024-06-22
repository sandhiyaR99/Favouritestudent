import { Link } from "react-router-dom"
function Favourite({fav, delstu}) {
    return (<>
        <div className=" bg-pink-300 py-6 flex justify-around">
            <h1 className=" underline md:text-xl sm: text-lg"><Link to={"/"}>List of students</Link></h1>
            <h1 className=" underline md:text-xl sm: text-lg"><Link to={"/favourite"}>Favourite Students</Link></h1>
        </div>
        <div>
        <h1 className="text-center py-2 md:text-xl sm: text-lg">Favourite Students</h1>
            {
                fav.map(function (item) {
                    return (
                            <li className=" list-none flex justify-around py-2">{item} <button onClick={() => { delstu(item) }} className="border rounded-md px-1 text-white bg-black">Delete</button> </li>
                    )
                })
            }
        </div>
    </>)
}
export default Favourite