import React from "react";
import Videoitem from "./Videoitem";
import { useState, useRef, useEffect } from "react";
import { searchAllPublicPost } from "apiList/post";

const Videolist = ({injectPostId, changeShow}) => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    const addData = () => {
        function success(response) {
            setPage((page)=>{return page+1})
            const newdata = response.data.response
            console.log(newdata)
            setData((data)=>{return [...data,...newdata]})
        }
        function fail(error) {
            console.log(error)
        }
        searchAllPublicPost(page,success,fail)
    }
    
    const target = useRef()
    const options = {
        threshold: 0.5
    };
    const observer = new IntersectionObserver(addData, options)

    useEffect(()=>{
        observer.observe(target.current)
        return ()=>{
            setData([])
            setPage(1)
        }
    }, []);

    // 검색
    const [searchTerm, setSearchTerm] = useState(""); // 검색어를 저장하는 상태
  

    const filteredData = data.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div className="py-8 sm:py-8 ">
            <div className="bg-white mx-auto max-w-7xl px-2 lg:px-8">
                <h1 className="my-8 py-24 text-center font-bold text-3xl text-dark ">💌투표해줘</h1>           
                <div className="flex justify-end my-4 rounded"> 
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search by title..." 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="py-2 px-4 w-64 shadow-xl rounded-md focus:ring focus:ring-opacity-50" 
                        />
                        <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                            🔍
                        </span>
                    </div>
                </div>
    
                <div className=" mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {filteredData.map((item, idx) => {
                        return (
                            <Videoitem
                                key={item.id}
                                props={item}
                                changeMode={() => {
                                    injectPostId(item.id);
                                    changeShow();
                                }}
                            />
                        );
                    })}
                    <div className="text-center" ref={target}>🚝찾는중🚝</div>
                </div>
            </div>
        </div>
    );
    }
    

export default Videolist