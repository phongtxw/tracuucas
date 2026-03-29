"use client";

import { useMemo } from "react";
import data3info from "../data/data3info";

const COLUMN_LABELS = {
  stt: "STT",
  tenkhoahoc: "Tên khoa học",
  tenchat: "Tên thường gọi",
  precursors: "Precursors",
  tienchat: "Các tiền chất",
  cachoachatdoc: "Các hóa chất độc (Tiếng Việt)",
  toxicchemicals: "Toxic Chemicals (Tiếng Anh)",
  hs: "HS Code",
  cas: "CAS",
  congthuc: "Công thức",
  note: "Ghi chú",
  phuluc: "Phụ lục",
  ma_so_hang_hoa: "Mã số hàng hóa",
  co_quan_quan_ly: "Cơ quan quản lý",
};

const COLUMN_WIDTHS = {
  stt: "60px",
  cas: "130px",
  congthuc: "140px",
  tenkhoahoc: "180px",
  tenchat: "180px",
  precursors: "140px",
  tienchat: "140px",
  cachoachatdoc: "350px",
  toxicchemicals: "350px",
  hs: "120px",
  note: "300px",
  phuluc: "400px",
};

const getColumnWidth = (col) =>
  COLUMN_WIDTHS[col] || "minmax(180px, 1fr)";


function Table({ filteredChemicals, darkMode }) {


  const columns = useMemo(() => {
    const set = new Set();
    filteredChemicals.forEach((item) =>
      Object.keys(item).forEach((key) => set.add(key))
    );

    let cols = Array.from(set);

    const noteIndex = cols.indexOf("note");
    const phulucIndex = cols.indexOf("phuluc");

    if (noteIndex !== -1 && phulucIndex !== -1 && noteIndex > phulucIndex) {
      cols.splice(noteIndex, 1);        
      cols.splice(phulucIndex, 0, "note"); 
    }

    return cols;
  }, [filteredChemicals]);


  const renderCellValue = (value) => {
    if (!value) return "—";
    if (Array.isArray(value)) return value.join("\n");
    return value;
  };

  console.log("darkMode in Table:", darkMode);

  return (
    <div
      className={`overflow-x-auto rounded-xl shadow border
        ${darkMode ? "bg-slate-900 border-slate-600" : "bg-white border-gray-200"}
      `}
    >
      <table
        className={`min-w-full table-fixed divide-y
          ${darkMode ? "divide-slate-600 text-slate-200" : "divide-gray-200"}
        `}
      >
        <thead>
          <tr>
            {columns.map(
              (col) =>
                col !== "info" && (
                  <th
                    key={col}
                    className={`px-4 py-3 text-left text-xs md:text-sm font-semibold uppercase tracking-wider
                      ${
                        darkMode
                          ? "bg-slate-700 text-slate-100"
                          : "bg-gray-200 text-blue-500"
                      }
                    `}
                    style={{ width: getColumnWidth(col) }}
                  >
                    {COLUMN_LABELS[col] || col}
                  </th>
                )
            )}
          </tr>
        </thead>

        {/* ================== BODY ================== */}
        <tbody>
          {filteredChemicals.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className={`px-6 py-8 text-center italic
                  ${darkMode ? "text-slate-400" : "text-gray-500"}
                `}
              >
                Không có dữ liệu
              </td>
            </tr>
          ) : (
            filteredChemicals.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className={`transition-colors
                  ${
                    darkMode
                      ? "hover:bg-slate-700"
                      : "hover:bg-blue-50"
                  }
                `}
              >
                {columns.map(
                  (col) =>
                    col !== "info" && (
                      <td
                        key={col}
                        className={`px-4 py-3 text-sm whitespace-pre-line break-words
                          transition-colors
                          ${
                            col === "phuluc"
                              ? darkMode
                                ? "font-semibold text-emerald-400"
                                : "font-semibold text-green-700"
                              : col === "note"
                              ? darkMode
                                ? "text-amber-300 font-medium"
                                : "text-yellow-800 font-medium"
                              : darkMode
                              ? "text-slate-200"
                              : "text-gray-700"
                          }
                        `}
                        style={{ width: getColumnWidth(col) }}
                      >

                        {renderCellValue(item[col])}

                        {/* ===== PHỤ LỤC INFO ===== */}
                        {col === "phuluc" && item.info && (
                          <div className="mt-4 space-y-1">
                            {item.info.map((key) => (
                              <div
                                key={key}
                                className={`text-sm whitespace-pre-line
                                  ${
                                    darkMode
                                      ? "text-rose-400"
                                      : "text-red-700"
                                  }
                                `}
                              >
                                {data3info[key]}
                              </div>
                            ))}
                          </div>
                        )}

                      </td>
                    )
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
