import axios from 'axios';

export const usersLoader = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch {
    throw new Response("Ошибка загрузки каталога пользователей", { status: 500 });
  }
};
