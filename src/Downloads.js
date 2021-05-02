import { OverlayTrigger, Tooltip } from 'react-bootstrap';
const appStates = {
  windows: {
    version: "0.1.0",
    versionTooltip: "<b>In development</b>",
    versionType: "warning",
    downloadLink: "https://raw.githubusercontent.com/Chattly/chattly.github.io/res/chattly-installs/Chattly_0.1.0_Setup-win.exe",
    downloadTooltip: "Still in development <b>Use at your own risk</b>",
    linkDisabled: false
  },
  linux: {
    version: "0.0.0",
    versionTooltip: "<b>Currently Unavailable</b>",
    versionType: "danger",
    downloadLink: "",
    downloadTooltip: "<b>Currently Unavailable</b>",
    linkDisabled: true
  },
  mac: {
    version: "0.0.0",
    versionTooltip: "<b>Currently Unavailable</b>",
    versionType: "danger",
    downloadLink: "",
    downloadTooltip: "<b>Currently Unavailable</b>",
    linkDisabled: true
  }
}

const Downloads = (props) => {
  return (
    <div>
      <h1>Downloads</h1>
      {props.location.params?.device === "all" &&
        <div className="table-responsive">
          <table className="table table-dark table-hover table-sm">
            <thead>
              <tr>
                <th scope="col">Device</th>
                <th scope="col">OS</th>
                <th scope="col">Version</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PC / Computer</td>
                <td>Windows</td>
                <OverlayTrigger overlay={
                  <Tooltip>
                    <div dangerouslySetInnerHTML={{ __html: appStates.windows.versionTooltip }} />
                  </Tooltip>
                }>
                  <td className={`table-${appStates.windows.versionType}`}>{appStates.windows.version}</td>
                </OverlayTrigger>
                <OverlayTrigger overlay={
                  <Tooltip>
                    <div dangerouslySetInnerHTML={{ __html: appStates.windows.downloadTooltip }} />
                  </Tooltip>
                }>
                  <td><a className={`btn-link ${appStates.windows.linkDisabled ? "disabled" : ""}`} href={appStates.windows.downloadLink} download>Download</a></td>
                </OverlayTrigger>
              </tr>
              <tr>
                <td>PC / Computer</td>
                <td>Linux</td>
                <OverlayTrigger overlay={
                  <Tooltip>
                    <div dangerouslySetInnerHTML={{ __html: appStates.linux.versionTooltip }} />
                  </Tooltip>
                }>
                  <td className={`table-${appStates.linux.versionType}`}>{appStates.linux.version}</td>
                </OverlayTrigger>
                <OverlayTrigger overlay={
                  <Tooltip>
                    <div dangerouslySetInnerHTML={{ __html: appStates.linux.downloadTooltip }} />
                  </Tooltip>
                }>
                  <td><a className={`btn-link ${appStates.linux.linkDisabled ? "disabled" : ""}`} href={appStates.linux.downloadLink} download>Download</a></td>
                </OverlayTrigger>
              </tr>
              <tr>
                <td>PC / Computer</td>
                <td>Mac</td>
                <OverlayTrigger overlay={
                  <Tooltip>
                    <div dangerouslySetInnerHTML={{ __html: appStates.mac.versionTooltip }} />
                  </Tooltip>
                }>
                  <td className={`table-${appStates.mac.versionType}`}>{appStates.mac.version}</td>
                </OverlayTrigger>
                <OverlayTrigger overlay={
                  <Tooltip>
                    <div dangerouslySetInnerHTML={{ __html: appStates.mac.downloadTooltip }} />
                  </Tooltip>
                }>
                  <td><a className={`btn-link ${appStates.mac.linkDisabled ? "disabled" : ""}`} href={appStates.mac.downloadLink} download>Download</a></td>
                </OverlayTrigger>
              </tr>
            </tbody>
          </table>
        </div>
      }
      {props.location.params?.device === "win" &&
        <div>
          <h2>Download for Windows</h2>
          <p dangerouslySetInnerHTML={{ __html: appStates.windows.downloadTooltip }}></p>
          <OverlayTrigger overlay={
            <Tooltip>
              <div dangerouslySetInnerHTML={{ __html: appStates.windows.versionTooltip }} />
            </Tooltip>
          }>
            <span>
              <a href={appStates.windows.downloadLink} type="button" className={`btn btn-${appStates.windows.versionType} ${appStates.windows.linkDisabled ? "disabled" : ""}`} download>{`Download V${appStates.windows.version}`}</a>
            </span>
          </OverlayTrigger>
        </div>
      }
      {props.location.params?.device === "lin" &&
        <div>
          <h2>Download for Linux</h2>
          <p dangerouslySetInnerHTML={{ __html: appStates.linux.downloadTooltip }}></p>
          <OverlayTrigger overlay={
            <Tooltip>
              <div dangerouslySetInnerHTML={{ __html: appStates.linux.versionTooltip }} />
            </Tooltip>
          }>
            <span>
              <a href={appStates.linux.downloadLink} type="button" className={`btn btn-${appStates.linux.versionType} ${appStates.linux.linkDisabled ? "disabled" : ""}`} download>{`Download V${appStates.linux.version}`}</a>
            </span>
          </OverlayTrigger>
        </div>
      }
      {props.location.params?.device === "mac" &&
        <div>
          <h2>Download for Mac</h2>
          <p dangerouslySetInnerHTML={{ __html: appStates.mac.downloadTooltip }}></p>
          <OverlayTrigger overlay={
            <Tooltip>
              <div dangerouslySetInnerHTML={{ __html: appStates.mac.versionTooltip }} />
            </Tooltip>
          }>
            <span>
              <a href={appStates.mac.downloadLink} type="button" className={`btn btn-${appStates.mac.versionType} ${appStates.mac.linkDisabled ? "disabled" : ""}`} download>{`Download V${appStates.mac.version}`}</a>
            </span>
          </OverlayTrigger>
        </div>
      }
      <hr />
      <h2>Compiling your own version</h2>
      <p>We do not currently allow self-builds as the source code is remaining private for the time being</p>
      <p>If you would like a build made for a specific device or system, please contact us</p>
    </div>
  );
}

export default Downloads;
