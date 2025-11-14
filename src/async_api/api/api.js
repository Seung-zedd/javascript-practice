const getData = async () => {
    try {
      // fetch 함수는 비동기적으로 처리되기 때문에 순서를 보장하기 위해 await를 사용
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getData();
