import React from 'react'

const Profile = () => {
  return (
    <div className='main-container'>
      <div className='profile-container'>
        <div>
          <img style={{ width: "166px", height: "166px", borderRadius: "83px" }} src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80" />
        </div>
        <div className='details-section'>
          <h4>sweety</h4>
          <div className='followings'>
            <h6>19 posts</h6>
            <h6>19 followers</h6>
            <h6>19 following</h6>
          </div>
        </div>
      </div>
      <div className='posts'>
        <img className="post" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"/>
        <img className="post" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"/>
        <img className="post" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"/>
        <img className="post" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"/>

      </div>
    </div>
  )
}

export default Profile