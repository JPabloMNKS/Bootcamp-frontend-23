const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms);

    });
  };

  delay(3000).then(()=> console.log('run after 3 seconds'));