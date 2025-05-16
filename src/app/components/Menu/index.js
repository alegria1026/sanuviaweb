"use client"

import { useState } from "react"
import styles from "./Menu.module.css"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Image from "next/image"
import Link from "next/link" // Importamos el componente Link de Next.js

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <nav className={`${styles.navbar} ${menuOpen ? styles.menuOpen : ''}`}>
      <div href="/" className={styles.logo}>
        <Image  src="/logo.png" alt="FreshFusion Logo" fill />
      </div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {menuOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>
      <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <Link href="/" className={styles.navLink}>Inicio</Link>
        <Link href="/page/us" className={styles.navLink}>Nosotros</Link>
        <Link href="/page/product" className={styles.navLink}>Funcionalidades</Link>
        <Link href="/page/play" className={styles.navLink}>Cultiva y Aprende</Link>
      </div>
    </nav>
  )
}

export default Menu