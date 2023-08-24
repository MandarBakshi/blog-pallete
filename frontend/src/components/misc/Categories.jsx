

function Categories() {

  const categories = ["Sports", "Entertainment", "Tech", "Lifestyle", "Bollywood"];

  return (
    <div className='d-flex flex-nowrap py-2' style={{backgroundColor: "#dfe6e9", zIndex: "1020", position: "sticky", "top": "56px", overflowX: "auto"}}>
      {
        categories.map((category, index) => {
          return (
            <a key={index} className="badge text-bg-secondary mx-2 my-1">{category}</a>
          );
        })
      }
    </div>
  )
}

export default Categories
