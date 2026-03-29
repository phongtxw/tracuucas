// app/home/page.jsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

import ChemicalInfoCard from '../components/ChemicalInfoCard';
import Footer from "../components/Footer";

import data1 from "../data/data1";
import data2 from "../data/data2";
import data3 from "../data/data3";
import data4 from "../data/data4";
import data5 from "../data/data5";

import danhmucIA from "../data/danhmucIA";
import danhmucIB from "../data/danhmucIB";
import danhmucIIA from "../data/danhmucIIA";
import danhmucIIB from "../data/danhmucIIB";
import danhmucIII from "../data/danhmucIII";
import danhmucIVA from "../data/danhmucIVA";
import danhmucIVB from "../data/danhmucIVB";
import danhmucIVC from "../data/danhmucIVC";


const flattenData = (sources) =>
  sources.flatMap((group) =>
    (group.data || []).map((item) => ({
      ...item,
      phuluc: group.phuluc || [],
      note: group.note || [],
    }))
  );

const allChemicals = flattenData([
  ...data1, 
  ...data2, 
  ...data3,
  ...data4,
  ...data5,

  ...danhmucIA,
  ...danhmucIB,
  ...danhmucIIA,
  ...danhmucIIB,
  ...danhmucIII,
  ...danhmucIVA,
  ...danhmucIVB,
  ...danhmucIVC
]);


export default function ChemicalsPage() {
  const [darkMode, setDarkMode] = useState(true);

  const { data: session } = useSession();

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="min-w-full mx-auto">
          
          <div className="flex justify-items">
            <div className="w-2/5">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className=""
              >
                {darkMode ? (
                    <Image
                      src="/assets/icons/moon-svgrepo-com.svg"
                      alt="Dark Mode"
                      width={20}
                      height={20}
                      className="w-5 h-5 bg-white rounded-full"
                    />
                  ) : (
                    <Image
                      src="/assets/icons/sun-2-svgrepo-com.svg"
                      alt="Dark Mode"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  )
                }
              </button>
            </div>
            <div className="w-3/5">
              <h1 className={`text-3xl font-bold text-gray-900 mb-10 text-left ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Phụ lục hóa chất
              </h1>
            </div>
          </div>

          <ChemicalInfoCard allChemicals={allChemicals} darkMode={darkMode} />
        </div>
      </main>

      {session?.user?.email === "phongtx.it@gmail.com" 
      || session?.user?.email === "nguyenquynhib@gmail.com" ? (
        <button 
          onClick={ () => window.location.href = '/pt/update' }
          className="fixed bottom-4 left-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
          Thêm user
        </button>
      ) : null}

      <Footer darkMode={darkMode} />
    </div>
  );
}