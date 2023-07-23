import "./settings.css";


export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        
                        <label htmlFor="fileInput">
                            <img
                                className="settingsPPimg"
                                src="http://anniekateshomeschoolreviews.com/wp-content/uploads/2015/05/Online-picture1.jpg"
                                alt=""
                            />
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            style={{ display: "none" }}
                            className="settingsPPInput"
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Your new username" name="name" />
                    <label>Email</label>
                    <input type="email" placeholder="your new email" name="email" />
                    <label>Password</label>
                    <input type="password" placeholder="your new password" name="password" />
                    <button className="settingsSubmitButton" type="submit">
                        Update
                    </button>
                </form>
            </div>

        </div>
    );
}