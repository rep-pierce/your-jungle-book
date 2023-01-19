import React, {useState} from 'react'
import "../css/SearchBar.css"

function SearchBar({ posts, search, setSearch }) {
    const [filteredData, setFilteredData] = useState([])
    
    function handleSearch(e){
        const searchWord = e.target.value
        setSearch(searchWord)
        const newFilter = posts.filter((post) => {
            return post.title.toLowerCase().includes(searchWord.toLowerCase())
        })

        if (searchWord === ""){
            setFilteredData([])
        }else {
            setFilteredData(newFilter)
        }
    }
    function handleClear(){
        setSearch("")
        setFilteredData([])
    }
  return (
    <div className='search'>
        <div className='searchInputs'>
            <input type="text" value={search} onChange={handleSearch} />
            <div className='searchIcon'> 
            {search.length === 0 ? <p>🔍</p> : <p onClick={handleClear} id="clearBtn" >X</p>}
             
            </div>
        </div>
        {filteredData.length !== 0 && (<div className='dataResult'>
            {filteredData.slice(0, 15).map((value, key) => {
                return (
                <a className='dataItem' href={`/posts/${value.id}`} target="_blank" rel="noreferrer noopener"> 
                    <p>{value.title}</p> 
                </a>
                )
            })}
        </div>)}
    </div>
  )
}

export default SearchBar