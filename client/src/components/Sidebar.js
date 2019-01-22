import React from 'react'
import { connect } from 'react-redux'
import Link, { NavLink } from 'redux-first-router-link'
import { goToPage } from '../actions'
import styles from '../css/Sidebar'

const Sidebar = ({ onClick, path }) =>
  <div className={styles.sidebar}>
    <h2>A Head to Head (H2H) Contest </h2>

    <span
      className={active(path, '/')}
      onClick={() => onClick('HOME')}
    >
      LOGIN
    </span>
   
    <span
      className={active(path, '/leaderboard')}
      onClick={() => onClick('LEADERBORAD')}
    >
      LEADERBOARD
    </span>

    <div style={{ height: 14 }} />

  </div>

const active = (currentPath, path) =>
  currentPath === path ? styles.active : ''

const mapDispatch = { onClick: goToPage }
const mapState = ({ location }) => ({ path: location.pathname })

export default connect(mapState, mapDispatch)(Sidebar)
