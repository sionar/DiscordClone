import React from 'react';
import { Link } from 'react-router-dom';
import SplashLogOutButton from './splash-log-out-button';

const SplashHeader = (props) => {
  return (
    <header id="splash-header-flex-container">
      <div id="splash-header-left-flexbox">
      <Link to="/">
        <img src={window.splashHeaderLogo} id="splash-header-logo"/>
        <img src={window.splashHeaderLabel} id="splash-header-label"/>
      </Link>
      </div>
      <div id="splash-header-right-flexbox">
        <a href="https://www.tonyye.net">
          <svg className="splash-link-icon" id="personal-icon" version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
              <path d="M360 5101 c-91 -29 -142 -61 -211 -130 -70 -70 -106 -130 -133 -220
              -14 -50 -16 -255 -16 -2191 0 -2343 -4 -2173 58 -2295 32 -64 143 -175 207
              -207 122 -62 -48 -58 2295 -58 2343 0 2173 -4 2295 58 64 32 175 143 207 207
              62 122 58 -48 58 2295 0 2343 4 2173 -58 2295 -32 64 -143 175 -207 207 -122
              62 49 58 -2299 57 -2024 0 -2144 -1 -2196 -18z m4430 -853 c41 -28 70 -81 70
              -128 0 -33 -57 -242 -241 -875 -109 -375 -165 -546 -236 -728 -99 -256 -433
              -1238 -555 -1634 -9 -32 -11 -33 -64 -33 -45 0 -59 4 -79 25 -23 22 -25 32
              -25 117 1 122 23 221 105 453 135 383 165 497 165 641 l0 84 -184 199 c-491
              533 -681 785 -822 1087 -50 109 -54 135 -20 169 20 20 92 45 99 34 2 -2 23
              -29 48 -59 25 -30 128 -163 229 -295 319 -418 508 -638 660 -772 84 -74 99
              -83 129 -81 l35 3 118 315 c206 547 370 1047 445 1351 35 146 37 149 63 149
              15 0 42 -10 60 -22z m-3050 -287 c14 -10 46 -45 71 -77 35 -45 52 -60 75 -62
              16 -2 176 13 354 33 179 19 440 46 580 60 140 14 291 30 335 35 131 15 129 15
              121 -22 -15 -74 -129 -147 -299 -194 -173 -46 -395 -75 -861 -109 -114 -8
              -219 -18 -231 -21 -22 -5 -24 -13 -31 -102 -15 -212 22 -635 116 -1307 97
              -692 104 -757 120 -1100 13 -259 18 -245 -100 -245 l-76 0 -22 93 c-64 269
              -111 655 -197 1617 -45 497 -81 810 -111 953 l-6 27 -106 0 c-116 0 -274 -23
              -477 -69 -339 -76 -393 -85 -548 -85 -147 -1 -149 -1 -169 24 -37 46 -4 141
              61 174 14 8 278 51 586 95 308 45 570 83 581 86 16 4 25 17 33 52 37 150 114
              205 201 144z"/>
            </g>
          </svg>
        </a>
        <a href="https://www.github.com/sionar/dischord">
            <svg className="splash-link-icon" id="github-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="black">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"/>
            </svg>    
        </a>
        <a href="https://www.linkedin.com/in/tony-ye-292390115/">
            <svg className="splash-link-icon" id="linkedin-icon" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"/>
            </svg>
        </a>
        <a href="https://angel.co/tony-yang-ye">
            <svg className="splash-link-icon" id="angellist-icon" viewBox="0 0 256 369" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                <path d="M214.899083,157.357798 C230.165138,159.706422 240.733945,166.752294 246.605505,176.146789 C252.477064,185.541284 256,201.981651 256,223.119266 C256,265.394495 243.082569,300.623853 217.247706,327.633028 C191.412844,354.642202 158.53211,368.733945 118.605505,368.733945 C103.33945,368.733945 88.0733945,366.385321 72.8073394,360.513761 C57.5412844,354.642202 45.7981651,346.422018 35.2293578,337.027523 C23.4862385,326.458716 14.0917431,313.541284 8.22018349,301.798165 C3.52293578,288.880734 0,275.963303 0,263.045872 C0,248.954128 3.52293578,237.211009 9.39449541,228.990826 C15.266055,220.770642 25.8348624,216.073394 38.7522936,212.550459 C36.4036697,206.678899 34.0550459,201.981651 32.8807339,197.284404 C31.706422,193.761468 30.5321101,190.238532 30.5321101,187.889908 C30.5321101,180.844037 34.0550459,172.623853 42.2752294,164.40367 C50.4954128,156.183486 57.5412844,152.66055 64.587156,152.66055 C68.1100917,152.66055 70.4587156,152.66055 73.9816514,153.834862 C77.5045872,155.009174 81.0275229,156.183486 85.7247706,159.706422 C75.1559633,124.477064 64.587156,95.1192661 58.7155963,75.1559633 C52.8440367,55.1926606 50.4954128,42.2752294 50.4954128,34.0550459 C50.4954128,23.4862385 52.8440367,15.266055 58.7155963,9.39449541 C63.412844,3.52293578 71.6330275,0 81.0275229,0 C96.293578,0 116.256881,35.2293578 140.917431,106.862385 C145.614679,118.605505 147.963303,128 150.311927,135.045872 C152.66055,130.348624 155.009174,122.12844 158.53211,112.733945 C183.192661,42.2752294 204.330275,7.04587156 220.770642,7.04587156 C228.990826,7.04587156 236.036697,9.39449541 241.908257,15.266055 C246.605505,21.1376147 250.12844,29.3577982 250.12844,38.7522936 C250.12844,45.7981651 247.779817,59.8899083 241.908257,79.853211 C234.862385,99.8165138 226.642202,125.651376 214.899083,157.357798 L214.899083,157.357798 Z M34.0550459,260.697248 C36.4036697,263.045872 39.9266055,267.743119 43.4495413,273.614679 C54.0183486,288.880734 64.587156,297.100917 73.9816514,297.100917 C77.5045872,297.100917 79.853211,295.926606 82.2018349,293.577982 C84.5504587,291.229358 85.7247706,288.880734 85.7247706,287.706422 C85.7247706,285.357798 84.5504587,280.66055 81.0275229,274.788991 C77.5045872,268.917431 72.8073394,261.87156 66.9357798,254.825688 C59.8899083,246.605505 54.0183486,239.559633 50.4954128,236.036697 C45.7981651,232.513761 42.2752294,230.165138 39.9266055,230.165138 C34.0550459,230.165138 28.1834862,233.688073 23.4862385,239.559633 C18.7889908,245.431193 16.440367,253.651376 16.440367,261.87156 C16.440367,268.917431 17.6146789,275.963303 21.1376147,285.357798 C24.6605505,293.577982 29.3577982,302.972477 36.4036697,311.192661 C46.9724771,322.93578 58.7155963,333.504587 73.9816514,340.550459 C89.2477064,347.59633 104.513761,351.119266 123.302752,351.119266 C156.183486,351.119266 183.192661,339.376147 205.504587,314.715596 C227.816514,290.055046 238.385321,259.522936 238.385321,221.944954 C238.385321,210.201835 237.211009,201.981651 236.036697,194.93578 C234.862385,187.889908 231.33945,183.192661 227.816514,180.844037 C220.770642,174.972477 207.853211,170.275229 187.889908,165.577982 C167.926606,160.880734 146.788991,158.53211 125.651376,158.53211 C119.779817,158.53211 115.082569,159.706422 112.733945,162.055046 C110.385321,164.40367 109.211009,167.926606 109.211009,172.623853 C109.211009,184.366972 115.082569,192.587156 128,197.284404 C140.917431,201.981651 162.055046,205.504587 190.238532,205.504587 L200.807339,205.504587 C203.155963,205.504587 205.504587,206.678899 206.678899,207.853211 C207.853211,210.201835 209.027523,212.550459 209.027523,216.073394 C206.678899,218.422018 200.807339,221.944954 191.412844,225.46789 C182.018349,228.990826 176.146789,232.513761 171.449541,236.036697 C160.880734,243.082569 152.66055,252.477064 146.788991,263.045872 C140.917431,273.614679 137.394495,283.009174 137.394495,292.40367 C137.394495,298.275229 138.568807,304.146789 140.917431,312.366972 C143.266055,320.587156 144.440367,325.284404 144.440367,326.458716 L144.440367,328.807339 L144.440367,331.155963 C137.394495,331.155963 131.522936,326.458716 126.825688,318.238532 C122.12844,310.018349 120.954128,299.449541 120.954128,285.357798 L120.954128,283.009174 C119.779817,284.183486 118.605505,285.357798 117.431193,285.357798 C116.256881,285.357798 115.082569,286.53211 112.733945,286.53211 L108.036697,286.53211 C106.862385,286.53211 105.688073,285.357798 103.33945,285.357798 C103.33945,287.706422 104.513761,288.880734 104.513761,291.229358 L104.513761,295.926606 C104.513761,301.798165 102.165138,307.669725 97.4678899,312.366972 C92.7706422,317.06422 86.8990826,319.412844 79.853211,319.412844 C69.2844037,319.412844 58.7155963,314.715596 46.9724771,304.146789 C36.4036697,293.577982 30.5321101,284.183486 30.5321101,273.614679 C30.5321101,271.266055 30.5321101,270.091743 31.706422,268.917431 C31.706422,263.045872 32.8807339,261.87156 34.0550459,260.697248 L34.0550459,260.697248 Z M110.385321,266.568807 C112.733945,266.568807 116.256881,265.394495 118.605505,263.045872 C120.954128,260.697248 122.12844,257.174312 122.12844,254.825688 C122.12844,251.302752 119.779817,244.256881 115.082569,232.513761 C110.385321,220.770642 104.513761,209.027523 97.4678899,198.458716 C92.7706422,190.238532 86.8990826,183.192661 82.2018349,179.669725 C77.5045872,174.972477 72.8073394,173.798165 68.1100917,173.798165 C64.587156,173.798165 61.0642202,176.146789 56.3669725,180.844037 C51.6697248,185.541284 50.4954128,189.06422 50.4954128,193.761468 C50.4954128,197.284404 52.8440367,204.330275 56.3669725,212.550459 C61.0642202,220.770642 65.7614679,228.990826 72.8073394,238.385321 C79.853211,247.779817 86.8990826,256 93.9449541,261.87156 C100.990826,264.220183 105.688073,266.568807 110.385321,266.568807 L110.385321,266.568807 Z M135.045872,144.440367 L106.862385,65.7614679 C99.8165138,45.7981651 95.1192661,31.706422 90.4220183,25.8348624 C86.8990826,19.9633028 83.3761468,16.440367 78.6788991,16.440367 C75.1559633,16.440367 72.8073394,17.6146789 70.4587156,19.9633028 C66.9357798,23.4862385 65.7614679,27.0091743 65.7614679,31.706422 C65.7614679,39.9266055 69.2844037,52.8440367 75.1559633,71.6330275 C81.0275229,90.4220183 90.4220183,116.256881 102.165138,146.788991 C103.33945,144.440367 104.513761,143.266055 106.862385,143.266055 C109.211009,142.091743 111.559633,142.091743 113.908257,142.091743 L119.779817,142.091743 C123.302752,143.266055 128,143.266055 135.045872,144.440367 L135.045872,144.440367 Z M163.229358,220.770642 C156.183486,220.770642 149.137615,219.59633 142.091743,218.422018 C135.045872,217.247706 129.174312,216.073394 123.302752,213.724771 C125.651376,219.59633 128,224.293578 130.348624,230.165138 C132.697248,236.036697 133.87156,240.733945 135.045872,246.605505 C138.568807,241.908257 143.266055,237.211009 147.963303,232.513761 C153.834862,227.816514 158.53211,224.293578 163.229358,220.770642 L163.229358,220.770642 Z M197.284404,152.66055 C209.027523,122.12844 217.247706,96.293578 224.293578,76.3302752 C230.165138,56.3669725 233.688073,44.6238532 233.688073,39.9266055 C233.688073,35.2293578 232.513761,31.706422 230.165138,28.1834862 C227.816514,25.8348624 225.46789,24.6605505 221.944954,24.6605505 C217.247706,24.6605505 212.550459,28.1834862 207.853211,36.4036697 C203.155963,44.6238532 197.284404,56.3669725 191.412844,73.9816514 L165.577982,146.788991 L197.284404,152.66055 L197.284404,152.66055 Z" fill="#000000"></path>
            </svg>                    
        </a>
          <Link to={props.loggedIn ? "/channels/@me" : "/login"}>
            <button className="splash-header-button">{props.loggedIn? "Open" : "Login"}</button>
          </Link>
          {props.loggedIn ? <SplashLogOutButton logout={props.logout}/> : null}
      </div>
    </header>  
  )
};

export default SplashHeader;