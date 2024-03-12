import React from 'react'
import capsulData from './data/capsulData'
import SecondNavCapsuls from './SecondNavCapsuls'

const SecondNav = (props) => {
  return (
    <div className={`${props.secondNavSwitched}`}>
      {capsulData.map((elem)=>{
        return <SecondNavCapsuls name={elem.name} svg={elem.svg} nogap={elem.nogap}/>
      })}
      {/* searchbar */}
      <div class={`second-nav-search ${props.searchBar}`}>
    <div class="search-container">
      <button type="button" class="search-button-text">
          <div class="search-text">Search for restaurant and food</div>
      </button>
      <div style={{position: 'absolute', top: '16px', right: '16px', width: '18px', height: '18px'}}>
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          aria-hidden="true"
          strokeColor="rgba(2, 6, 12, 0.6)"
          fillColor="rgba(2, 6, 12, 0.6)"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.0998 8.84232C13.0998 11.7418 10.7493 14.0922 7.84989 14.0922C4.95046 14.0922 2.6 11.7418 2.6 8.84232C2.6 5.94289 4.95046 3.59243 7.84989 3.59243C10.7493 3.59243 13.0998 5.94289 13.0998 8.84232ZM12.1431 14.1802C10.9686 15.1261 9.47534 15.6922 7.84989 15.6922C4.0668 15.6922 1 12.6254 1 8.84232C1 5.05923 4.0668 1.99243 7.84989 1.99243C11.633 1.99243 14.6998 5.05923 14.6998 8.84232C14.6998 10.4974 14.1128 12.0153 13.1357 13.1993L18.319 17.9606C18.7226 18.3313 18.7359 18.9637 18.3483 19.3511C17.9634 19.7357 17.3365 19.7254 16.9645 19.3282L12.1431 14.1802Z"
            fill="rgba(2, 6, 12, 0.6)"
            fill-opacity="0.92"
          ></path>
        </svg>
      </div>
    </div>
  </div>


    </div>
  )
}

export default SecondNav
