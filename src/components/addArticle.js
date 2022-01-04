import React, { Component } from "react";
import ArticleStore from "./articleStore";

class AddArticle extends Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleValidation() {
        debugger
        let d = new Date();
        var datestring = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " ";

        let fields = this.state.fields;
        let localData = JSON.parse(localStorage.getItem("Articles"));
        let articleJson =
        {
            "id": localData.length + 1,
            "title": fields.title,
            "description": fields.description,
            "publishDate": datestring,
            "publisherName": fields.publisherName,
            "imageUrl": ""
        }
        localData.push(articleJson);
        localStorage.setItem("Articles", JSON.stringify(localData));
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["publisherName"]) {
            formIsValid = false;
            errors["publisherName"] = "Cannot be empty";
        }

        if (typeof fields["publisherName"] !== "undefined") {
            if (!fields["publisherName"]) {
                formIsValid = false;
                errors["publisherName"] = "Only letters";
            }
        }

        //Title
        if (!fields["title"]) {
            formIsValid = false;
            errors["title"] = "Cannot be empty";
        }

        if (typeof fields["title"] !== "undefined") {
            if (!fields["title"]) {
                formIsValid = false;
                errors["title"] = "Only letters";
            }
        }

        //Description
        if (!fields["description"]) {
            formIsValid = false;
            errors["description"] = "Cannot be empty";
        }

        if (typeof fields["description"] !== "undefined") {
            if (!fields["description"]) {
                formIsValid = false;
                errors["description"] = "Only letters";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    articleSubmit(e) {
        debugger
        e.preventDefault();
        if (this.handleValidation()) {
            this.props.history.push("/");
        } else {
            alert("Form has errors.")
        }

    }

    handleChange(field, e) {

        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <div>
                <header className="header-section">Add New Article </header>
                <form name="contactform" className="form-class" onSubmit={this.articleSubmit.bind(this)}>

                    Publisher Name: <input ref="publisherName" type="text" size="30" placeholder="Publisher Name" onChange={this.handleChange.bind(this, "publisherName")} value={this.state.fields["publisherName"]} />
                    <span className="error">{this.state.errors["publisherName"]}</span>
                    <br />
                    Title: <input refs="title" type="text" size="30" placeholder="Title" onChange={this.handleChange.bind(this, "title")} value={this.state.fields["title"]} />
                    <span className="error">{this.state.errors["title"]}</span>
                    <br />

                    Description: <textarea refs="description" cols="28" rows="10"
                        className="comments" placeholder="Description" onChange={this.handleChange.bind(this, "description")}>{this.state.fields["description"]}</textarea>
                    <span className="error">{this.state.errors["description"]}</span>
                    <br />
                    <button className="submit-class" id="submit" value="Submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddArticle;