import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Designs/PasswordChangePage.css";

const PasswordChangePage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      setError("All fields are required");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError("New password and confirm password must match");
      return;
    }

    console.log("Password Change Request:", {
      currentPassword,
      newPassword,
      confirmNewPassword,
    });

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/change_password/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            current_password: currentPassword,
            new_password: newPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Password changed successfully");
        toast.success(data.message);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        setError("");
      } else {
        console.error("Error changing password:", data);
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Unexpected error occurred");
    }
  };

  return (
    <div className="passwordChangePageContainer">
      <h3 className="passwordChangePageTitle">Change Password</h3>
      <form className="passwordChangePageForm" onSubmit={handleSubmit}>
        <label>
          Current Password:
          <input
            className="passwordChangePageInputField"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </label>
        <label>
          New Password:
          <input
            className="passwordChangePageInputField"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm New Password:
          <input
            className="passwordChangePageInputField"
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </label>
        {error && <p className="passwordChangePageErrorMessage">{error}</p>}
        <button className="passwordChangePageSubmitButton" type="submit">
          Change Password
        </button>
        <ToastContainer style={{ marginTop: "60px" }} />
      </form>
    </div>
  );
};

export default PasswordChangePage;
