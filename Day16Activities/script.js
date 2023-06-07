const CBHT = (countdown = "", cb = (d) => {}) => {
    console.log(countdown);
    cb(countdown);
  };
  CBHT(10, () => {
    CBHT(9, () => {
      CBHT(8, () => {
        CBHT(7, () => {
          CBHT(6, () => {
            CBHT(5, () => {
              CBHT(4, () => {
                CBHT(3, () => {
                  CBHT(2, () => {
                    CBHT(1, () => {
                      CBHT("Happy Independence Day");
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });