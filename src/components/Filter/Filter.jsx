import React, { useState } from "react";
import styles from "./filter.module.css";
import filterIcon from "./filter-icon.png";
import gridViewIcon from "./grid-view-icon.png";
import listViewIcon from "./list-view-icon.png";
const Filter = (props) => {
    
    return (
        <div className={styles.filter}>
            <div className={styles.wrapper}>
                <div className={styles["icon-wrapper"]}>
                    <img src={filterIcon} alt="" />
                    <p className={styles["filter-text"]}>Filter</p>
                    <img src={gridViewIcon} alt="" 
                    onClick={() => props.setGridView(true)}
                    />
                    <img src={listViewIcon} alt="" 
                    onClick={() => props.setGridView(false)}
                    />
                </div>
                {/* <div className={styles.controls}>
                    <p>
                        Sort by
                        <select onChange={e => props.setSorted(e.target.value)} value={props.sorted}>
                            <option value="free">Бесплатный</option>
                            <option value="price">Платный</option>
                        </select>
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default Filter;
