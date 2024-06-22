import { Link } from "react-router-dom"

function Student({ fav, favstu }) {
    const stu = ["Sandy", "Manny","Panny","kenny","Keziy","Dunpy"]
    return (
        <>
            <div className=" bg-pink-300 py-6 px-2 flex justify-around">
                <h1 className=" underline md:text-xl sm: text-lg"><Link to={"/"}>List of students</Link></h1>
                <h1 className=" underline md:text-xl sm: text-lg"><Link to={"/favourite"}>Favourite Students</Link></h1>
            </div>
            <div>
                <h1 className="md:text-xl text-center py-3 sm: text-lg">List of students</h1>
                {
                    stu.map(function (item) {
                        return (
                            <li className=" list-none flex justify-around py-2">{item}
                                {
                                    fav.includes(item) ? (
                                        <button disabled className="border rounded-md px-1 text-white bg-gray-600">Added</button>
                                    ) : (<button onClick={() => { favstu(item) }} className="border rounded-md px-1 text-white bg-black">Add to favourite</button>)
                                }</li>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Student