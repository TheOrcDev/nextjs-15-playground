"use server";

export async function fetchMessage(): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return "Lok'tar Ogar!";
}

export async function addToCart(prevState: string | null, queryData: FormData) {
  const itemID = queryData.get("itemID");

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return "Added to cart";
}

export async function submitForm(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return formData.get("username");
}
