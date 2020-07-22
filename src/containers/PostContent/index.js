import React, { Component } from "react";
import { PageContainer } from "./style";
import DropDown from "../../components/DropDown";
import { categoryTypes } from "../../constants/categoryTypes";
import AddNew from "../../components/AddNew";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: { id: "", value: "" },
            newCategory: "",
            categoryList: categoryTypes,
            showNewCategoryForm: false
        };
    }

    changeCategory(selected) {
        this.setState({ category: selected });
    }

    renderAddNewCategory(){
        return (
            <div className="add-category" onClick={()=>this.setState({showNewCategoryForm:true})}>
                <span>دسته بندی جدید</span>
                <i className="add flaticon-plus"/>
            </div>
        );
    }

    render() {
        const { category, categoryList, newCategory, showNewCategoryForm } = this.state;
        return (
            <PageContainer>
                <div className="header">
                    <div className="right"></div>
                    <div className="left">
                        <div className="category-container">
                            <DropDown
                                options={categoryList}
                                value={category}
                                label={"انتخاب دسته بندی"}
                                onChange={selected => this.changeCategory(selected)}
                                extraItem = {this.renderAddNewCategory()}
                                show={!showNewCategoryForm}
                            />
                        </div>
                        <div className="new-form-container">
                            { showNewCategoryForm &&
                            <AddNew
                                title="دسته بندی"
                                value={newCategory}
                                onChange={val => this.setState({ newCategory: val })}
                                onClose={() => this.setState({showNewCategoryForm: false})}
                                onCreate={() =>
                                    this.setState({
                                        categoryList: [
                                            ...categoryList,
                                            {
                                                id: categoryList[categoryList.length - 1].id + 1,
                                                value: newCategory
                                            }
                                        ]
                                    })
                                }
                            />
                            }
                        </div>
                    </div>
                </div>


                <div className="footer"></div>
            </PageContainer>
        );
    }
}

export default Index;
