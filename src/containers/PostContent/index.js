import React, { Component } from "react";
import { PageContainer, Icon } from "./style";
import DropDown from "../../components/DropDown";
import { categoryTypes } from "../../constants/categoryTypes";
import AddNew from "../../components/AddNew";
import Button from "../../components/Button";
import {Colors, Size} from "../../constants/styles/button";
import Uploader from "../../components/uploader";
import ImageBox from "../../components/ImageBox";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: { id: "", value: "" },
            newCategory: "",
            categoryList: categoryTypes,
            showNewCategoryForm: false,
            pics:[]
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

    removePic(index){
        let newPics = this.state.pics.filter((item, i) => i!==index);
        this.setState({pics: newPics});
    }

    render() {
        const { category, categoryList, newCategory, showNewCategoryForm, pics } = this.state;
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

                <div className="main-part">
                    {
                        pics.map((pic, i) =>{
                            let width = "calc(50% - 4px)";
                            if (i === pics.length - 1 && i%2 ===0){
                                width = "100%";
                            }
                            return <ImageBox key={i} onClose={()=> this.removePic(i)} file={pic} width={width}/>
                        })
                    }
                </div>

                <div className="footer">
                    <div className="right">
                        <Icon><i className="icon flaticon-bar-chart"/></Icon>
                        <Icon><i className="icon flaticon-video-player"/></Icon>
                        <label
                            htmlFor="file"
                        >
                            <Icon active><i className="icon flaticon-picture"/></Icon>
                        </label>
                        <Uploader
                            accept="image/png, image/jpeg, image/jpg"
                            limit="3"
                            files={pics}
                            onChange={(files)=>this.setState({pics: files})}
                        />
                    </div>
                    <div className="left">
                        <Button
                            size={Size.large}
                            btn={Colors.primary}
                        >
                            انتشار
                        </Button>
                    </div>
                </div>
            </PageContainer>
        );
    }
}

export default Index;
