type Params = {
  tag: string;
  password: string;
};

export async function signin(params: Params) {
  const response = await fetch("http://localhost:2000/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  const data = await response.json();
  return data;
}
