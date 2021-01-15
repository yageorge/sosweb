import React, { useEffect, useState } from "react";

import Api from "../../../services/api/Api";
import AlertModal from "../../../services/alert/AlertModal";

import Categories from "../../../components/cards/categories/view/Categories";

export default function IndexCategories() {

  const [categories, setCategories] = useState(null);

  const getCategories = async () => {
    try {

      const response = await Api.categories.getCategories();
      setCategories(response.data);

    } catch (e) {
      AlertModal('An error has occurred: ' + e.message)
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <Categories categories={categories} />
        </div>
      </div>
    </>
  );
}
