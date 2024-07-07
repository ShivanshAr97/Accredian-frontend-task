import React from 'react'
import Side from "./Side"
import Table from "./Table"
import { Link } from 'react-router-dom'

const Benefits = () => {
  const storage = localStorage.getItem("formData")
  return (
    <>
    <div>What are the referral benefits?</div>
    <Side/>
    <Table/>
    <button>Show more</button>
    {storage?<Link to="/dashboard"><button>Refer Now</button></Link>:<Link to="/login"><button>Refer Now</button></Link>}
    </>
  )
}

export default Benefits