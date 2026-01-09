import React from "react"
import { Link } from "react-router-dom"
import SignOut from "./SignOut"
import CreatePostButton from "./createPostButton"

const Navbar = () => {
  const token = localStorage.getItem("token")
  console.log(token || "no token")
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>SocialApp</h2>

      <ul style={styles.links}>
        <Link to="/"><li>Home</li></Link>

        {token ? (
          <>
            <Link to="/create-post">
                <button className="createButton">create post</button>
            </Link>
            <SignOut />
          </>
        ) : (
          <>
            <Link to="/login"><li>Login</li></Link>
            
          </>
        )}
      </ul>
    </nav>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    backgroundColor: "#111827",
    color: "#fff"
  },
  logo: {
    margin: 0
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "16px",
    alignItems: "center",
    margin: 0,
    padding: 0
  },
  logout: {
    background: "red",
    color: "white",
    border: "none",
    padding: "6px 12px",
    cursor: "pointer"
  }
}

export default Navbar
