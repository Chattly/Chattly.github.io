import { Link } from "react-router-dom";

const Downloads = (props) => {
  return (
    <div>
      <h1>Downloads</h1>
      {!props.location.params &&
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
                <td className="table-warning" data-toggle="tooltip" title="<b>In development</b>">0.1.0</td>
              </tr>
              <tr>
                <td>PC / Computer</td>
                <td>Linux</td>
                <td className="table-danger" data-toggle="tooltip" title="<b>Currently Unavailable</b>">0.0.0</td>
              </tr>
              <tr>
                <td>PC / Computer</td>
                <td>Mac</td>
                <td className="table-danger" data-toggle="tooltip" title="<b>Currently Unavailable</b>">0.0.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      }
      {props.location.params?.device === "win" &&
        <h2>
          This is windows
        </h2>
      }
      {props.location.params?.device === "lin" &&
        <h2>
          This is linux
        </h2>
      }
      {props.location.params?.device === "mac" &&
        <h2>
          This is mac
        </h2>
      }
      <h2>Compiling your own version</h2>
      <p>We do not currently allow self-compilations as the source code is remaining private for the time being</p>
    </div>
  );
}

export default Downloads;
