import { useEffect, useState } from "react";

import "./App.css";

import {
  loginWithGitHub,
  getGitHubUser,
  logoutGitHub,
} from "../../lib/github/auth";

import type { GitHubUser } from "../../lib/github/types";

function App() {
  const [user, setUser] = useState<GitHubUser | null>(null);

  useEffect(() => {
    getGitHubUser().then(setUser);
  }, []);

  async function connect() {
    const githubUser = await loginWithGitHub();

    if (githubUser) {
      setUser(githubUser);
    }
  }

  async function disconnect() {
    await logoutGitHub();
    setUser(null);
  }

  if (!user) {
    return (
      <div
        style={{
          width: 320,
          padding: 20,
          textAlign: "center",
        }}
      >
        <h2>LeetSync</h2>

        <button onClick={connect}>
          Connect GitHub
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        width: 320,
        padding: 20,
      }}
    >
      <h2>LeetSync</h2>

      <p>
        <strong>{user.name}</strong>
      </p>

      <p>@{user.login}</p>

      <p
        style={{
          color: "green",
          fontWeight: "bold",
        }}
      >
        ✅ GitHub Connected
      </p>

      <button onClick={disconnect}>
        Disconnect
      </button>
    </div>
  );
}

export default App;