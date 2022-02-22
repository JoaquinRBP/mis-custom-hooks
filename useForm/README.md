#useForm
...
    cosnt initialForm = {
        name: '',
        age: '',
        email: ''
    }
    const [formValues, handleInputChange, reset]= useForm(initialForm)
...