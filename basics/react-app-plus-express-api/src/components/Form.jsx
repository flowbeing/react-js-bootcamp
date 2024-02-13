
export default function Form(){

    function onSubmitForm(event){
        event.preventDefault();
    
        let formData = new FormData(event.target);
        let data = Object.fromEntries(formData.entries()); // entries here is a method that returns [a list of listed key-value pair (no maps)] as an iteraterable object
        let checkedFormData = formData.getAll('checkboxer'); // retrieve the 'values' of input elements that have their 'name' properties set to 'checkboxer'. return value is a List
        data.checkboxer = checkedFormData;
        console.log(data);

    
      }
    
    return (
        <form onSubmit={onSubmitForm}>
    
            <input name='user-name'></input>
            <input type="checkbox" name="checkboxer" value="Checkbox One"></input>
            <input type="checkbox" name="checkboxer" value="Checkbox Two"></input>
            <input type="radio" name="checkboxer" value="Checkbox Three"></input>
            <button>Submit</button>
    
        </form>
    );
}