// React Modules
import React from 'react';

// Footer
const Footer = () => {
  // JSX
  return (
    <footer className="footer" data-msutemplate="footer" id="PageFooter">
      <div className="grounding-bar svg-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="grounding-bars"
          viewBox="0 0 60 20"
        >
          <path
            d="M0 20V0h12v20H0zm24 0V0h12v20H24zm24 0V0h12v20H48z"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="logo svg-wrapper">
        <a href="https://www.MissouriState.edu/">
          <svg
            aria-labelledby="sgf-wordmark-straight-title"
            className="wordmark-straight"
            role="img"
            viewBox="0 0 282 56"
          >
            <title id="sgf-wordmark-straight-title">
              Missouri State University
            </title>
            <path
              d="M28.341 51.62c0 2.553-1.506 3.795-4.033 3.795-2.539 0-4.019-1.231-4.019-3.795v-5.87h2.076v5.87c0 1.03.265 2.049 1.943 2.049 1.481 0 1.957-.648 1.957-2.05v-5.87h2.076v5.87zm20.61-5.87h2.064l3.94 6.331h.026V45.75h1.946v9.44H54.85l-3.926-6.322h-.03v6.323h-1.942v-9.44zm28.078 9.44v-9.44h2.077v9.44h-2.077zm26.517 0h-2.344l-3.067-9.44h2.142l2.102 6.635h.027l2.13-6.635h2.14l-3.13 9.44zm22.762-9.44h7.062v1.746h-4.985v2.023h4.574v1.613h-4.574v2.312h5.09v1.745h-7.167v-9.44zm27.171 0h5.092c1.693 0 2.762 1.178 2.762 2.603 0 1.112-.452 1.944-1.497 2.367v.026c1.019.264 1.313 1.256 1.377 2.21.039.593.03 1.704.397 2.233h-2.075c-.25-.595-.225-1.507-.33-2.26-.146-.992-.531-1.427-1.576-1.427h-2.075v3.688h-2.075v-9.44zm2.075 4.27h2.275c.927 0 1.426-.398 1.426-1.35 0-.913-.499-1.309-1.426-1.309h-2.275v2.66zm26.884 2.035c0 1.258.979 1.746 2.09 1.746.724 0 1.836-.21 1.836-1.18 0-1.014-1.414-1.187-2.805-1.556-1.4-.37-2.813-.914-2.813-2.686 0-1.929 1.823-2.857 3.53-2.857 1.97 0 3.781.863 3.781 3.043h-2.008c-.066-1.138-.873-1.428-1.866-1.428-.661 0-1.428.275-1.428 1.068 0 .73.449.823 2.817 1.43.686.173 2.803.61 2.803 2.75 0 1.733-1.363 3.03-3.925 3.03-2.094 0-4.048-1.034-4.022-3.36h2.01zm25.447 3.135v-9.44h2.076v9.44h-2.076zm23.83-7.693h-2.829V45.75h7.731v1.747h-2.826v7.693h-2.076v-7.693zm26.227 4.017l-3.48-5.765h2.343l2.207 3.728 2.196-3.728h2.314l-3.505 5.816v3.625h-2.075v-3.676zM12.604 32.725v.646a145.297 145.297 0 0 0-5.851-.148c-1.886 0-3.966.05-6.198.148v-.595c3.867-1.634 4.957-6.049 4.957-14.18V8.828c0-4.166-.248-6.198-3.371-7.192V.993c2.133.05 4.365.1 6.595.1 1.587 0 3.175-.05 4.76-.05 3.174 6.494 6.594 13.09 10.463 19.782L31.743.993c1.489.05 2.977.1 4.463.1 2.28 0 4.56-.1 6.842-.199v.693c-2.082.348-2.973 1.536-2.973 3.87v16.56c0 7.04.295 10.017 3.569 10.708v.646c-3.076-.148-5.704-.148-7.787-.148-2.081 0-4.562 0-7.586.148v-.646c3.472-.69 3.472-3.867 3.472-10.709V5.752L20.637 34.166h-.398C16.173 24.944 11.859 15.62 7.348 6.2v12.397c0 8.33.842 12.546 5.256 14.13zM52.33 16.678v5.473c0 4.68.119 6.902 2.538 7.576v.476a85.804 85.804 0 0 0-5.473-.16 89.73 89.73 0 0 0-5.316.16v-.476c2.42-.794 2.538-2.937 2.538-7.257v-7.143c0-2.816-.16-3.886-2.222-4.045v-.477c3.055-.396 5.752-.832 8.054-1.387-.12 2.341-.12 4.758-.12 7.26zm5.949 5.235l.556.078c.83 4.879 3.173 7.377 6.665 7.377 2.736 0 4.68-1.624 4.68-3.887 0-2.3-1.745-2.854-5.237-3.726-5.04-1.268-7.458-2.421-7.458-6.23 0-3.685 3.649-6.622 9.799-6.622 2.856 0 5.552.593 8.013 1.747l-1.827 5.39-.514-.038c-1.112-3.89-3.411-5.95-6.15-5.95-2.218 0-3.925 1.587-3.925 3.45 0 2.736 2.14 2.817 5.949 3.69 4.959 1.108 7.377 2.46 7.377 6.19 0 4.402-3.965 7.258-10.868 7.258-3.372 0-6.584-.795-9.28-2.182l2.22-6.545zm21.33 0l.56.078c.83 4.879 3.17 7.377 6.663 7.377 2.736 0 4.679-1.624 4.679-3.887 0-2.3-1.746-2.854-5.238-3.726-5.034-1.268-7.455-2.421-7.455-6.23 0-3.685 3.65-6.622 9.797-6.622 2.857 0 5.554.593 8.014 1.747l-1.825 5.39-.515-.038c-1.112-3.89-3.412-5.95-6.15-5.95-2.221 0-3.925 1.587-3.925 3.45 0 2.736 2.139 2.817 5.95 3.69 4.957 1.108 7.377 2.46 7.377 6.19 0 4.402-3.967 7.258-10.87 7.258-3.371 0-6.583-.795-9.281-2.182l2.22-6.545zm31.1-13.01c7.103 0 11.824 4.44 11.824 10.827 0 6.348-4.681 10.829-11.983 10.829-6.98 0-11.78-4.561-11.78-10.791 0-6.463 4.758-10.865 11.939-10.865zm5.396 10.787c0-6.346-1.904-9.598-5.477-9.598-3.449 0-5.392 3.252-5.392 9.56 0 6.426 1.904 9.716 5.392 9.716 3.572 0 5.477-3.251 5.477-9.678zm6.855-8.368v-.477c3.49-.435 6.11-.911 7.891-1.426v11.107c0 5.313 1.191 7.812 4.17 7.812 2.893 0 4.957-2.895 4.957-7.812v-5.198c0-2.817-.16-3.845-2.22-4.006v-.477c3.012-.395 5.706-.871 8.047-1.426-.08 2.814-.08 4.482-.08 4.919v6.305c0 5.633.278 8.33 2.619 8.844v.674a220.287 220.287 0 0 0-5.238-.076h-2.06c-.357-1.233-.673-2.421-.87-3.611-1.308 2.776-3.648 4.165-7.063 4.165-5.314 0-7.93-3.213-7.93-9.717v-5.594c0-2.817-.16-3.845-2.224-4.006zm26.25 18.405c2.418-.794 2.535-2.896 2.535-7.257v-7.142c0-2.817-.159-3.887-2.22-4.045v-.478c3.492-.434 6.15-.91 7.938-1.429v4.842c1.623-3.569 3.887-5.356 6.776-5.356.242 0 .516 0 .796.041l-2.18 6.464h-.518c-.397-.515-.91-.794-1.583-.794-2.105 0-3.291 1.944-3.291 5.674v1.904c0 4.68.117 6.902 2.535 7.576v.477a84.96 84.96 0 0 0-5.474-.162c-1.55 0-3.293.042-5.314.162v-.477zm24.082-13.049v5.473c0 4.68.118 6.902 2.54 7.576v.476a85.811 85.811 0 0 0-5.476-.16c-1.544 0-3.292.041-5.315.16v-.476c2.417-.794 2.54-2.937 2.54-7.257v-7.143c0-2.816-.16-3.886-2.227-4.045v-.477c3.058-.396 5.757-.832 8.056-1.387-.118 2.341-.118 4.758-.118 7.26zm10.557 5.16h.594c1.24 6.942 5.304 10.708 11.507 10.708 5.204 0 8.226-2.528 8.226-6.593 0-3.72-3.173-4.514-8.723-5.604-4.216-.84-7.49-1.533-9.673-3.468-1.785-1.587-2.824-3.87-2.824-6.348 0-5.95 5.602-10.311 14.877-10.311 4.56 0 8.972.94 12.692 2.625l-2.28 7.886h-.646c-1.39-5.802-4.563-8.728-9.568-8.728-4.515 0-7.389 2.479-7.389 5.6 0 1.342.595 2.48 1.686 3.374 1.736 1.39 5.007 1.588 9.522 2.48 6.79 1.338 10.11 4.262 10.11 9.37 0 6.447-5.999 11.457-15.666 11.457-5.95 0-11.16-1.193-15.172-3.225l2.727-9.223zm39.18 7.85v.473s-2.22-.038-6.861-.077c-1.346-.635-1.506-2.658-1.506-6.188v-2.857l.078-9.598h-2.221l.197-1.151c3.253-1.707 5.556-3.888 7.18-6.945h.637c-.12 1.232-.2 2.937-.2 5.04v1.389h4.565l-.478 1.667h-4.086v9.004c0 5.753.238 8.528 2.695 9.243zm24.117.473a208.297 208.297 0 0 0-4.875-.076h-1.746c-.6-.95-1.072-2.026-1.39-3.254-1.508 2.656-3.491 3.767-6.544 3.767-4.959 0-8.172-2.734-8.172-6.305 0-4.405 4.72-6.625 14.241-6.943v-.158c0-4.68-1.664-7.1-4.721-7.1-3.173 0-4.958 2.14-6.149 6.745h-.553l-1.825-5.91c2.931-1.391 6.029-2.065 9.32-2.065 3.769 0 6.545.952 8.097 2.659 1.702 1.824 1.702 4.086 1.702 7.298v1.824c0 5.633.277 8.33 2.615 8.844v.674zm-9.4-11.66c-4.285 0-6.582 2.06-6.582 5.714 0 2.895 1.345 4.637 3.288 4.637 3.135 0 4.208-3.052 4.208-9.084V18.54c-.317-.04-.635-.04-.914-.04zm19.526 11.187v.473s-2.224-.038-6.863-.077c-1.35-.635-1.505-2.658-1.505-6.188v-2.857l.078-9.598h-2.223l.2-1.151c3.251-1.707 5.551-3.888 7.179-6.945h.631c-.115 1.232-.197 2.937-.197 5.04v1.389h4.563l-.475 1.667h-4.088v9.004c0 5.753.238 8.528 2.7 9.243zm7.245-12.42a30.767 30.767 0 0 0-.08 1.906c0 6.11 2.658 9.52 6.823 9.52 3.57 0 6.107-2.496 7.378-7.296l1.071.95c-1.624 5.515-5.116 8.25-10.512 8.25-6.782 0-11.344-4.52-11.344-10.947 0-6.306 4.562-10.79 11.143-10.79 5.874 0 9.642 3.018 10.396 8.407h-14.875zm4.32-7.176c-2.138 0-3.763 1.981-4.28 5.75h8.091c-.119-3.69-1.662-5.75-3.812-5.75zM173.57 5.683c0 1.427-1.48 2.584-3.302 2.584s-3.302-1.157-3.302-2.584c0-1.426 1.48-2.584 3.302-2.584s3.302 1.158 3.302 2.584zm-121.336 0c0 1.427-1.477 2.584-3.302 2.584-1.823 0-3.302-1.157-3.302-2.584 0-1.426 1.48-2.584 3.302-2.584 1.825 0 3.302 1.158 3.302 2.584zm227.182 24.898h.216c.252 0 .457-.084.457-.287 0-.18-.132-.3-.42-.3-.12 0-.204.012-.252.024v.563zm-.012 1.105h-.455V29.73a3.82 3.82 0 0 1 .755-.073c.373 0 .54.061.685.157a.542.542 0 0 1 .19.42c0 .227-.168.395-.406.467v.024c.19.06.3.215.358.48.061.3.096.42.145.48h-.491c-.06-.072-.096-.24-.158-.467-.034-.216-.154-.313-.406-.313h-.216v.78zm.3-2.591c-.863 0-1.512.707-1.512 1.57 0 .877.65 1.572 1.536 1.572.864.011 1.5-.696 1.5-1.572 0-.863-.636-1.57-1.512-1.57h-.012zm.024-.396c1.127 0 2.002.874 2.002 1.966 0 1.116-.875 1.98-2.014 1.98-1.127 0-2.026-.865-2.026-1.98 0-1.091.9-1.966 2.026-1.966h.012z"
              fillRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div className="contact">
        <div className="col connect">
          <h2>Missouri State University</h2>
          <ul>
            <li>
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12">
                  <path d="M5.6 7.6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-7.6A5.6 5.6 0 0 0 0 5.6C0 9.8 5.6 16 5.6 16s5.6-6.2 5.6-10.4A5.6 5.6 0 0 0 5.6 0z"></path>
                </svg>
              </span>
              <span>
                <a href="https://goo.gl/maps/UrEW4i5jsqR2">
                  901 S. National Ave.
                  <br />
                  Springfield, MO 65897
                </a>
              </span>
            </li>
            <li>
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="13" width="16">
                  <path d="M14.4 3.2L8 7.2l-6.4-4V1.6l6.4 4 6.4-4v1.6zm0-3.2H1.6C.712 0 0 .712 0 1.6v9.6a1.6 1.6 0 0 0 1.6 1.6h12.8a1.6 1.6 0 0 0 1.6-1.6V1.6A1.6 1.6 0 0 0 14.4 0z"></path>
                </svg>
              </span>
              <span>
                <a href="mailto:Info@MissouriState.edu">
                  Info@MissouriState.edu
                </a>
              </span>
            </li>
            <li>
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16">
                  <path d="M3.218 6.924a13.42 13.42 0 0 0 5.858 5.858l1.955-1.955a.892.892 0 0 1 .907-.223c.995.33 2.062.507 3.173.507.491 0 .889.398.889.889v3.111c0 .491-.398.889-.889.889C6.765 16 0 9.235 0 .889A.889.889 0 0 1 .889 0H4c.49 0 .889.398.889.889 0 1.111.178 2.178.507 3.173a.892.892 0 0 1-.223.907L3.218 6.924z"></path>
                </svg>
              </span>
              <span>417-836-5000</span>
            </li>
            <li>
              <span className="icon" style={{ paddingTop: '.25rem' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 7C6.48 7 2 9.24 2 12c0 2.24 2.94 4.13 7 4.77V20l4-4-4-4v2.73c-3.15-.56-5-1.9-5-2.73 0-1.06 3.04-3 8-3s8 1.94 8 3c0 .73-1.46 1.89-4 2.53v2.05c3.53-.77 6-2.53 6-4.58 0-2.76-4.48-5-10-5z"></path>
                </svg>
              </span>
              <span>
                <a href="https://www.MissouriState.edu/Admissions/VisitCampus/default.htm">
                  Take a Virtual Tour
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="col campuses">
          <h2>Campuses</h2>
          <ul>
            <li>
              <a href="https://www.MissouriState.edu/default.htm">
                Missouri State University
              </a>
            </li>
            <li>
              <a href="https://WP.MissouriState.edu/default.htm">
                Missouri State University-West Plains
              </a>
            </li>
            <li>
              <a href="https://Ag.MissouriState.edu/MtnGrv/default.htm">
                Missouri State University-Mountain Grove
              </a>
            </li>
            <li>
              <a href="https://China.MissouriState.edu/default.htm">
                Missouri State University-China Programs
              </a>
            </li>
          </ul>
        </div>
        <div className="col social">
          <ul className="icon-group">
            <li className="icon">
              <a
                aria-label="Follow Missouri State on Facebook"
                href="https://www.facebook.com/missouristateu"
                title="Follow Missouri State on Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.504v-9.281H9.703v-3.633h3.125V8.412c0-3.099 1.895-4.787 4.659-4.787.931-.002 1.862.045 2.789.14v3.24h-1.904c-1.506 0-1.8.712-1.8 1.763v2.313h3.6l-.467 3.633h-3.153V24h6.124c.731 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z"></path>
                </svg>
              </a>
            </li>
            <li className="icon">
              <a
                aria-label="Follow Missouri State on Twitter"
                href="https://twitter.com/missouristate"
                title="Follow Missouri State on Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 20"
                  width="24"
                >
                  <path d="M7.566 19.484c9.02 0 13.953-7.478 13.953-13.96 0-.213 0-.427-.01-.63a10.05 10.05 0 0 0 2.45-2.544 9.95 9.95 0 0 1-2.817.774A4.903 4.903 0 0 0 23.298.407a9.927 9.927 0 0 1-3.112 1.19 4.879 4.879 0 0 0-3.58-1.546 4.906 4.906 0 0 0-4.9 4.904c0 .387.04.763.131 1.12A13.909 13.909 0 0 1 1.73.945a4.923 4.923 0 0 0-.661 2.462c0 1.7.864 3.205 2.186 4.08a4.815 4.815 0 0 1-2.217-.61v.061a4.91 4.91 0 0 0 3.936 4.812 4.886 4.886 0 0 1-1.292.173c-.315 0-.62-.03-.925-.091a4.897 4.897 0 0 0 4.576 3.408 9.854 9.854 0 0 1-7.26 2.025 13.658 13.658 0 0 0 7.494 2.218"></path>
                </svg>
              </a>
            </li>
            <li className="icon">
              <a
                aria-label="Follow Missouri State on Instagram"
                href="https://www.instagram.com/missouristate/"
                title="Follow Missouri State on Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M11.996.008c3.258 0 3.667.013 4.946.072 1.277.058 2.15.26 2.912.557a5.88 5.88 0 0 1 2.125 1.384 5.88 5.88 0 0 1 1.384 2.125c.296.763.499 1.635.557 2.912.059 1.28.072 1.688.072 4.946s-.013 3.666-.072 4.946c-.058 1.277-.26 2.149-.557 2.912a5.88 5.88 0 0 1-1.384 2.125 5.88 5.88 0 0 1-2.125 1.383c-.763.297-1.635.5-2.912.558-1.28.058-1.688.072-4.946.072s-3.666-.014-4.946-.072c-1.277-.058-2.149-.261-2.912-.558a5.88 5.88 0 0 1-2.125-1.383A5.88 5.88 0 0 1 .63 19.862c-.297-.763-.5-1.635-.558-2.912C.014 15.67 0 15.262 0 12.004s.014-3.667.072-4.946C.13 5.78.333 4.908.63 4.146A5.88 5.88 0 0 1 2.013 2.02 5.88 5.88 0 0 1 4.138.637C4.901.341 5.773.138 7.05.08 8.33.02 8.738.008 11.996.008zm0 2.161c-3.203 0-3.582.012-4.847.07-1.17.053-1.805.249-2.228.413-.56.218-.96.478-1.38.897-.419.42-.679.82-.897 1.38-.164.422-.36 1.058-.413 2.227-.057 1.265-.07 1.645-.07 4.848s.013 3.582.07 4.847c.054 1.17.25 1.805.413 2.228.218.56.478.96.898 1.38.42.419.82.679 1.38.897.422.164 1.057.36 2.227.413 1.265.057 1.644.07 4.847.07 3.204 0 3.583-.013 4.848-.07 1.17-.054 1.805-.25 2.227-.413.56-.218.96-.478 1.38-.898.42-.42.68-.82.897-1.38.164-.422.36-1.057.413-2.227.058-1.265.07-1.644.07-4.847 0-3.203-.012-3.583-.07-4.848-.053-1.17-.249-1.805-.413-2.227a3.716 3.716 0 0 0-.897-1.38c-.42-.42-.82-.68-1.38-.897-.422-.164-1.058-.36-2.227-.413-1.265-.058-1.645-.07-4.848-.07zm-.296 14.22a4.09 4.09 0 1 0 0-8.178 4.09 4.09 0 0 0 0 8.178zM11.7 6a6.3 6.3 0 1 1 0 12.6 6.3 6.3 0 0 1 0-12.6zm8.1-.3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                </svg>
              </a>
            </li>
            <li className="icon">
              <a
                aria-label="Follow Missouri State on TikTok"
                href="https://www.tiktok.com/@missouristate"
                title="Follow Missouri State on TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.2,4,4,6.2,4,9v32c0,2.8,2.2,5,5,5h32c2.8,0,5-2.2,5-5V9C46,6.2,43.8,4,41,4z M37,22.3 c-0.2,0-0.5,0-0.7,0c-2.6,0-4.9-1.3-6.3-3.4c0,5.3,0,11.4,0,11.5c0,4.7-3.8,8.5-8.5,8.5S13,35.2,13,30.5s3.8-8.5,8.5-8.5 c0.2,0,0.4,0,0.5,0v4.2c-0.2,0-0.3-0.1-0.5-0.1c-2.4,0-4.4,1.9-4.4,4.4s1.9,4.4,4.4,4.4S26,33,26,30.6c0-0.1,0-19.6,0-19.6h4 c0.4,3.6,3.3,6.4,6.9,6.7V22.3z"></path>
                </svg>
              </a>
            </li>
            <li className="icon">
              <a
                aria-label="Follow Missouri State on YouTube"
                href="https://www.youtube.com/c/missouristateuniversity"
                title="Follow Missouri State on YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="17"
                  viewBox="0 0 24 17"
                  width="24"
                >
                  <path d="M23.498 2.633C24 4.513 24 8.432 24 8.432s0 3.92-.502 5.799a3.012 3.012 0 0 1-2.121 2.13c-1.872.503-9.377.503-9.377.503s-7.505 0-9.377-.503a3.012 3.012 0 0 1-2.121-2.13C0 12.35 0 8.432 0 8.432s0-3.92.502-5.799A3.011 3.011 0 0 1 2.623.503C4.495 0 12 0 12 0s7.505 0 9.377.503a3.011 3.011 0 0 1 2.121 2.13zM9.5 12L16 8.5 9.5 5v7z"></path>
                </svg>
              </a>
            </li>
            <li className="icon">
              <a
                aria-label="Follow Missouri State on LinkedIn"
                href="https://www.linkedin.com/company/missouri-state-university"
                title="Follow Missouri State on LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M20.451 20.45h-3.559v-5.57c0-1.327-.023-3.036-1.85-3.036-1.852 0-2.135 1.447-2.135 2.942v5.665H9.352V8.997h3.412v1.566h.05c.474-.9 1.635-1.85 3.367-1.85 3.604 0 4.27 2.372 4.27 5.456v6.282zM5.34 7.434a2.063 2.063 0 1 1 0-4.129 2.064 2.064 0 0 1 0 4.129zM3.556 20.45h3.563V8.997H3.556v11.454zM22.224 0H1.77C.793 0 0 .775 0 1.73v20.538C0 23.224.793 24 1.77 24h20.454c.979 0 1.775-.776 1.775-1.732V1.731C24 .775 23.203 0 22.224 0z"></path>
                </svg>
              </a>
            </li>
            <li className="icon">
              <a
                aria-label="Follow Missouri State Blogs"
                href="https://blogs.MissouriState.edu/"
                title="Follow Missouri State Blogs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M3.27 17.46a3.27 3.27 0 0 1 3.27 3.27C6.54 22.5 5.07 24 3.27 24 1.5 24 0 22.5 0 20.73a3.27 3.27 0 0 1 3.27-3.27zM0 .66C12.89.66 23.34 11.11 23.34 24h-4.245c0-10.546-8.55-19.095-19.095-19.095V.66zm0 8.49c8.201 0 14.85 6.649 14.85 14.85h-4.245A10.605 10.605 0 0 0 0 13.395V9.15z"></path>
                </svg>
              </a>
            </li>
            <li className="icon">
              <a
                aria-label="Follow Missouri State on Flickr"
                href="https://www.flickr.com/photos/missouristate"
                title="Follow Missouri State on Flickr"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  viewBox="0 0 24 12"
                  width="24"
                >
                  <path d="M10.8 6c0 3-2.4 5.4-5.4 5.4C2.4 11.4 0 9 0 6 0 3 2.4.6 5.4.6c3 0 5.4 2.4 5.4 5.4zM18.6.6c-3 0-5.4 2.4-5.4 5.4 0 3 2.4 5.4 5.4 5.4 3 0 5.4-2.4 5.4-5.4C24 3 21.6.6 18.6.6z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="hashtag">#GoMaroon</p>
      <div className="be-ix-link-block">
        <div className="be-ix-link-block">
          <div className="be-related-link-container">
            <div className="be-label">
              <h2>Also of Interest</h2>
            </div>
            <ul className="be-list">
              <li className="be-list-item">
                <a
                  className="be-related-link"
                  href="https://www.missouristate.edu/FinancialAid/HowtoApply.htm"
                >
                  How Do I Apply for Financial Aid?
                </a>
              </li>
              <li className="be-list-item">
                <a
                  className="be-related-link"
                  href="https://www.missouristate.edu/FinancialAid/Scholarships/default.htm"
                >
                  Scholarships
                </a>
              </li>
              <li className="be-list-item">
                <a
                  className="be-related-link"
                  href="https://www.missouristate.edu/FinancialAid/PellGrantPolicy.htm"
                >
                  Pell Grant Policy
                </a>
              </li>
            </ul>{' '}
          </div>
        </div>
      </div>
      <div className="branding MYMS">
        <a href="https://www.MissouriState.edu/About/">
          <img
            className="DisplayOnly"
            src="https://missouristate.info/ou/_resources/svg/myms-straight-reversed.svg"
            alt="Make Your Missouri Statement"
          />
        </a>
      </div>
      <div className="legal">
        <ul>
          <li id="directedit-modified">Last Modified: May 24, 2023</li>
        </ul>
        <ul>
          <li>
            <a href="https://www.MissouriState.edu/Accessibility/default.htm">
              Accessibility
            </a>
          </li>
          <li>
            <a href="https://www.MissouriState.edu/Disclaimer/default.htm">
              Disclaimer
            </a>
          </li>
          <li>
            <a href="https://www.MissouriState.edu/Services/FedManInfo.htm">
              Disclosures
            </a>
          </li>
          <li>
            <a href="https://www.MissouriState.edu/Equity/Nondiscrimination_Statement.htm">
              EO/AA/F/Veterans/Disability/Sexual Orientation/Gender Identity
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <span id="directedit">
              <a
                id="de"
                rel="nofollow"
                href="https://a.cms.omniupdate.com/11/?skin=oucampus&amp;account=missouristate&amp;site=www&amp;action=de&amp;path=/default.pcf"
              >
                ©
              </a>
            </span>{' '}
            2023{' '}
            <a
              href="https://www.MissouriState.edu/BOG/default.htm"
              aria-label="Board of Governors"
            >
              Board of Governors, Missouri State University
            </a>
          </li>
          <li>
            <a
              href="https://www.MissouriState.edu/Contact/default.htm"
              aria-label="Contact Missouri State"
            >
              Contact Information
            </a>
          </li>
          <li>
            <a
              href="https://mrf.healthcarebluebook.com/medpay"
              aria-label="Healthcare Bluebook Medpay Machine Readable Files"
            >
              Healthcare MRFs
            </a>
          </li>
        </ul>
        <div className="Row PrintOnly">
          <ul>
            <li>
              <script>missouristate.outputDocumentLocation();</script>
              https://www.missouristate.edu/
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

// Export
export default Footer;
