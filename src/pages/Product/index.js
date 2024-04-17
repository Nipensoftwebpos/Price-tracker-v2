import React, { useState } from 'react'
import Layout from '../../components/Layout'
import FilterComponents from '../../components/FilterComponent'
import TableComponent from '../../components/common/TableComponent'
import PaginationBar from '../../components/common/Pagination'

const Product = () => {
  const [EditId, setEditId] = useState()
  const result = [
    {
      "name": "Galaxy A70 (A705 / 2019) LCD Assembly w/ Frame (BLACK) (Aftermarket INCELL)",
      "code": "SA705C-WFBLK",
      "brand": "Galaxy A Screen",
      "category": "ANDROID-LCD",
      "make": "ANDROID-LCD",
      "company_url": "https://www.phonelcdparts.com/galaxy-a70-a705-2019-lcd-assembly-w-frame-black-aftermarket-incell-sa705c-wfblk",
      "competitors_urls": {
        "mobilesentrix.com": "https://www.mobilesentrix.com/lcd-assembly-with-frame-for-samsung-galaxy-a70-aftermarket-quality-incell-a705-2019-all-colors",
        "phonelcd.com": "https://www.phonelcd.com/lcd-assembly-with-frame-for-samsung-galaxy-a70-aftermarket-quality-incell-a705-2019-all-colors"
      },
      "created_at": "2024-04-15T11:44:03.744961+05:30",
      "updated_at": "2024-04-15T11:44:03.745001+05:30",
      "created_by": "admin_devesh"
    },
    {
      "name": "Galaxy A70 (A705 / 2019) LCD Assembly w/ Frame (BLACK) (Aftermarket INCELL)",
      "code": "SA705C-WFBLK",
      "brand": "Galaxy A Screen",
      "category": "ANDROID-LCD",
      "make": "ANDROID-LCD",
      "company_url": "https://www.phonelcdparts.com/galaxy-a70-a705-2019-lcd-assembly-w-frame-black-aftermarket-incell-sa705c-wfblk",
      "competitors_urls": {
        "mobilesentrix.com": "https://www.mobilesentrix.com/lcd-assembly-with-frame-for-samsung-galaxy-a70-aftermarket-quality-incell-a705-2019-all-colors"
      },
      "created_at": "2024-04-15T11:44:03.744961+05:30",
      "updated_at": "2024-04-15T11:44:03.745001+05:30",
      "created_by": "admin_devesh"
    },
    {
      "name": "Galaxy A70 (A705 / 2019) LCD Assembly w/ Frame (BLACK) (Aftermarket INCELL)",
      "code": "SA705C-WFBLK",
      "brand": "Galaxy A Screen",
      "category": "ANDROID-LCD",
      "make": "ANDROID-LCD",
      "company_url": "https://www.phonelcdparts.com/galaxy-a70-a705-2019-lcd-assembly-w-frame-black-aftermarket-incell-sa705c-wfblk",
      "competitors_urls": {
        "mobilesentrix.com": "https://www.mobilesentrix.com/lcd-assembly-with-frame-for-samsung-galaxy-a70-aftermarket-quality-incell-a705-2019-all-colors"
      },
      "created_at": "2024-04-15T11:44:03.744961+05:30",
      "updated_at": "2024-04-15T11:44:03.745001+05:30",
      "created_by": "admin_devesh"
    },
    {
      "name": "Galaxy A70 (A705 / 2019) LCD Assembly w/ Frame (BLACK) (Aftermarket INCELL)",
      "code": "SA705C-WFBLK",
      "brand": "Galaxy A Screen",
      "category": "ANDROID-LCD",
      "make": "ANDROID-LCD",
      "company_url": "https://www.phonelcdparts.com/galaxy-a70-a705-2019-lcd-assembly-w-frame-black-aftermarket-incell-sa705c-wfblk",
      "competitors_urls": {
        "mobilesentrix.com": "https://www.mobilesentrix.com/lcd-assembly-with-frame-for-samsung-galaxy-a70-aftermarket-quality-incell-a705-2019-all-colors"
      },
      "created_at": "2024-04-15T11:44:03.744961+05:30",
      "updated_at": "2024-04-15T11:44:03.745001+05:30",
      "created_by": "admin_devesh"
    },
    {
      "name": "Galaxy A70 (A705 / 2019) LCD Assembly w/ Frame (BLACK) (Aftermarket INCELL)",
      "code": "SA705C-WFBLK",
      "brand": "Galaxy A Screen",
      "category": "ANDROID-LCD",
      "make": "ANDROID-LCD",
      "company_url": "https://www.phonelcdparts.com/galaxy-a70-a705-2019-lcd-assembly-w-frame-black-aftermarket-incell-sa705c-wfblk",
      "competitors_urls": {
        "mobilesentrix.com": "https://www.mobilesentrix.com/lcd-assembly-with-frame-for-samsung-galaxy-a70-aftermarket-quality-incell-a705-2019-all-colors"
      },
      "created_at": "2024-04-15T11:44:03.744961+05:30",
      "updated_at": "2024-04-15T11:44:03.745001+05:30",
      "created_by": "admin_devesh"
    },
    {
      "name": "Galaxy A70 (A705 / 2019) LCD Assembly w/ Frame (BLACK) (Aftermarket INCELL)",
      "code": "SA705C-WFBLK",
      "brand": "Galaxy A Screen",
      "category": "ANDROID-LCD",
      "make": "ANDROID-LCD",
      "company_url": "https://www.phonelcdparts.com/galaxy-a70-a705-2019-lcd-assembly-w-frame-black-aftermarket-incell-sa705c-wfblk",
      "competitors_urls": {
        "mobilesentrix.com": "https://www.mobilesentrix.com/lcd-assembly-with-frame-for-samsung-galaxy-a70-aftermarket-quality-incell-a705-2019-all-colors"
      },
      "created_at": "2024-04-15T11:44:03.744961+05:30",
      "updated_at": "2024-04-15T11:44:03.745001+05:30",
      "created_by": "admin_devesh"
    },
    {
      "name": "Galaxy A70 (A705 / 2019) LCD Assembly w/ Frame (BLACK) (Aftermarket INCELL)",
      "code": "SA705C-WFBLK",
      "brand": "Galaxy A Screen",
      "category": "ANDROID-LCD",
      "make": "ANDROID-LCD",
      "company_url": "https://www.phonelcdparts.com/galaxy-a70-a705-2019-lcd-assembly-w-frame-black-aftermarket-incell-sa705c-wfblk",
      "competitors_urls": {
        "mobilesentrix.com": "https://www.mobilesentrix.com/lcd-assembly-with-frame-for-samsung-galaxy-a70-aftermarket-quality-incell-a705-2019-all-colors"
      },
      "created_at": "2024-04-15T11:44:03.744961+05:30",
      "updated_at": "2024-04-15T11:44:03.745001+05:30",
      "created_by": "admin_devesh"
    },
    {
      "name": "Galaxy A70 (A705 / 2019) LCD Assembly w/ Frame (BLACK) (Aftermarket INCELL)",
      "code": "SA705C-WFBLK",
      "brand": "Galaxy A Screen",
      "category": "ANDROID-LCD",
      "make": "ANDROID-LCD",
      "company_url": "https://www.phonelcdparts.com/galaxy-a70-a705-2019-lcd-assembly-w-frame-black-aftermarket-incell-sa705c-wfblk",
      "competitors_urls": {
        "mobilesentrix.com": "https://www.mobilesentrix.com/lcd-assembly-with-frame-for-samsung-galaxy-a70-aftermarket-quality-incell-a705-2019-all-colors"
      },
      "created_at": "2024-04-15T11:44:03.744961+05:30",
      "updated_at": "2024-04-15T11:44:03.745001+05:30",
      "created_by": "admin_devesh"
    },
    {
      "name": "Galaxy A70 (A705 / 2019) LCD Assembly w/ Frame (BLACK) (Aftermarket INCELL)",
      "code": "SA705C-WFBLK",
      "brand": "Galaxy A Screen",
      "category": "ANDROID-LCD",
      "make": "ANDROID-LCD",
      "company_url": "https://www.phonelcdparts.com/galaxy-a70-a705-2019-lcd-assembly-w-frame-black-aftermarket-incell-sa705c-wfblk",
      "competitors_urls": {
        "mobilesentrix.com": "https://www.mobilesentrix.com/lcd-assembly-with-frame-for-samsung-galaxy-a70-aftermarket-quality-incell-a705-2019-all-colors"
      },
      "created_at": "2024-04-15T11:44:03.744961+05:30",
      "updated_at": "2024-04-15T11:44:03.745001+05:30",
      "created_by": "admin_devesh"
    },
    {
      "name": "Galaxy A70 (A705 / 2019) LCD Assembly w/ Frame (BLACK) (Aftermarket INCELL)",
      "code": "SA705C-WFBLK",
      "brand": "Galaxy A Screen",
      "category": "ANDROID-LCD",
      "make": "ANDROID-LCD",
      "company_url": "https://www.phonelcdparts.com/galaxy-a70-a705-2019-lcd-assembly-w-frame-black-aftermarket-incell-sa705c-wfblk",
      "competitors_urls": {
        "mobilesentrix.com": "https://www.mobilesentrix.com/lcd-assembly-with-frame-for-samsung-galaxy-a70-aftermarket-quality-incell-a705-2019-all-colors"
      },
      "created_at": "2024-04-15T11:44:03.744961+05:30",
      "updated_at": "2024-04-15T11:44:03.745001+05:30",
      "created_by": "admin_devesh"
    }
  ]
  // const result = [
  //   {
  //     "id": 8328,
  //     "company": "phonelcdparts.com",
  //     "product_code": "TCL20Y-BLK",
  //     "product_name": "TCL 20Y / 20E LCD Assembly (Premium / Refurbished)",
  //     "product_stock_status": "in_stock",
  //     "product_price": "14.25000",
  //     "created_at": "2024-04-15T14:41:08.424973+05:30",
  //     "is_latest": true,
  //     "additional_info": {
  //         "message": null
  //     },
  //     "product_instance": 29481,
  //     "created_by": "admin_devesh"
  // }
  // ]
  console.log(EditId, 'editId')
  return (
    <Layout>
      <FilterComponents />
      <TableComponent TableData={result} ExcludeFields={['updated_at', 'created_by', 'is_latest', 'additional_info']} FilterFields={['company_url']} isCheckBox={true} setEditId={setEditId} IsAction={true}/>
      <PaginationBar />
    </Layout>
  )
}

export default Product
