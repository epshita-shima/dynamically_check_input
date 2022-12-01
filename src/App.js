import "./App.css";
import { useState } from "react";
import { Formik } from "formik";
function App() {
  const [count, setCount] = useState([]);
  const [selectAll, setSelectAll] = useState([])
  const [priceValue, setPriceValue] = useState([]);
  const [totalPrice, setTotalPrice] = useState([])
  const [position, setPosition] = useState([])
  const [singleTotalPrice, setSingleTotalPrice] = useState([])
  const [isShow, setIsshow] = useState(false)
  const addFields = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked)


    // {
    //   values.priceData?.map((detail, index) => {
    //     var element;
    //     let getTotalPrice = 0;

    //     for (let i = 0; i < values.priceData.length; i++) {
    //       element = values.priceData[i].price;
    //       console.log(element);
    //       if (checked) {
    //         getTotalPrice += +element;
    //       } else {
    //         getTotalPrice = 0;
    //       }
    //       console.log("totalPrice=", getTotalPrice);
    //       setTotalPrice(getTotalPrice)
    //     }
    {
      count.map((item, index) => {
        var form = document.forms[0];
        var selectElement = form.querySelector(
          `input[name="item.${index}.check"]`
        );
        var selectMemberElement = form.querySelector(
          `input[name="member"]`
        );

        if (checked) {
          selectElement.checked = true;
        } else {
          selectElement.checked = false;
        }
      })
    }
    //   });
    // }
  };
  const calculate = () => {

  }
  return (
    <div className="w-screen h-screen p-10 bg-gray-50">
      <h2 className="max-w-md mx-auto text-center text-2xl text-red-700 font-bold">
        Check Input
      </h2>
      <Formik
        initialValues={{
          priceData: [
            {
              price: "",
            },
          ],
        }}
        onSubmit={(values, actions) => {
          console.log(values)
          const number = values.data;
          console.log(number)
          const array = [];
          for (var i = 0; i < number; i++) {
            array.push([i]);
          }
          setCount(array);
          count.map((item, index) => {
            var form = document.forms[0];
            var selectElement = form.querySelector(
              `input[name="item.${index}.price"]`
            );
          });
        }}

        render={({ values, setFieldValue, handleSubmit }) => (
          <div className="mx-w-md mx-auto mt-10 space-y-5">
            <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
              <form onSubmit={handleSubmit}>
                <label htmlFor="" className="text-[18px] font-semibold mr-2">
                  No of textbox
                </label>
                <input
                  type="text"
                  id="member"
                  name="member"
                  onChange={(e) => {
                    console.log(e.target.value)
                    setFieldValue('data', e.target.value)
                  }}
                  className="input border border-black h-[38px] text-center"
                />

                <button
                  type="submit"
                  className="bg-[#86198f] text-white px-3 py-2 rounded shadow ml-4"
                >
                  Add textbox
                </button>
                <br />
                <div class="p-4 h-auto flex items-center justify-center space-y-1 bg-white rounded shadow">
                  <input
                    type="checkbox"
                    className="w-[35px] h-[20px] mt-2"
                    onClick={(e,) => {

                      const { value, checked } = e.target
                      addFields(e)
                      console.log(values)

                      values.priceData?.map((detail, index) => {
                        var element;
                        let getTotalPrice = 0;

                        for (let i = 0; i < values.priceData.length; i++) {
                          element = values.priceData[i].price;
                          console.log(element);
                          if (checked) {
                            getTotalPrice += +element;
                          } else {
                            getTotalPrice = 0;
                          }
                          console.log("totalPrice=", getTotalPrice);
                          setTotalPrice(getTotalPrice)
                          setIsshow(isShow)
                        }
                      })

                    }}
                  />
                  <label label htmlFor="" className="text-[20px] font-semibold mr-2" >
                    All Check
                  </label>
                </div>

                {count.map((item, index) => {
                  return (
                    <div class="p-4 h-auto flex items-center justify-center space-y-1 bg-white rounded shadow">
                      <input
                        type="checkbox"
                        id={`item.${index}.check`}
                        name={`item.${index}.check`}
                        onChange={(e) => {

                          const { value, checked } = e.target;
                          if (checked) {
                            setPosition([...position, index])
                          }
                          else {
                            setPosition([...position, null])
                          }

                          var element;
                          var getSingleTotalPrice = 0;

                          var form = document.forms[0];
                          var selectElement = form.querySelector(
                            `input[name="item.${index}.price"]`
                          );

                          if (checked) {
                            let temp = priceValue.map((i) => i);
                            temp[index] = selectElement.value;
                            setPriceValue(temp);
                            for (let i = 0; i < temp.length; i++) {
                              element = temp[i];
                              getSingleTotalPrice += + element
                              console.log(getSingleTotalPrice)
                            }
                            const position = []
                            position.push([...position, index])
                            console.log(position)
                            setSingleTotalPrice(getSingleTotalPrice)
                          }
                          else {
                            let temp = priceValue.map((i) => i);
                            temp[index] = 0;
                            setPriceValue(temp);
                            for (let i = 0; i < temp.length; i++) {
                              element = temp[i];
                              getSingleTotalPrice += + element
                              console.log(getSingleTotalPrice)
                            }
                            setSingleTotalPrice(getSingleTotalPrice)
                            setIsshow(!isShow)
                          }
                        }}
                        className="w-[35px] h-[20px] mt-1"
                      />
                      <input
                        type="text"
                        id={`item.${index}.price`}
                        name={`item.${index}.price`}
                        onChange={(e) => {
                          setFieldValue(
                            `priceData.${index}.price`,
                            e.target.value
                          );
                          console.log(values)
                        }}
                        className="input border border-black h-[38px] text-center mt-1 ml-4"
                      />

                    </div>
                  );
                })}
                <div>
                  {/* <p>selectted all {count} item and Total number is {totalPrice}</p> */}
                  <p>selectted items are {position} item and Total number is {singleTotalPrice}</p>


                </div>
              </form>
            </div>
          </div >
        )
        }
      />
    </div >
  );
}

export default App;
