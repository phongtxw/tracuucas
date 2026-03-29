"use client";

import { useState, useMemo } from "react";

import Search from "./Search";
import Table from "./Table";

const extractSearchableText = (value) => {
  if (value == null) return "";

  if (Array.isArray(value)) {
    return value.map(extractSearchableText).join(" ");
  }

  if (typeof value === "object") {
    return Object.values(value)
      .map(extractSearchableText)
      .join(" ");
  }

  return String(value);
};

export default function ChemicalTable({ allChemicals, darkMode }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChemicals = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return allChemicals;

    const matched = allChemicals.filter((item) => {
      const text = extractSearchableText(item).toLowerCase();
      return text.includes(term);
    });

    if (matched.length > 0) return matched;

    const noCasResults = allChemicals.filter(
      (item) => !item.cas || item.cas.length === 0
    );

    return noCasResults.length > 0 ? noCasResults : allChemicals;
  }, [searchTerm, allChemicals]);

  const totalCount = allChemicals.length;
  const showingCount = filteredChemicals.length;

  const isNoResultButShowingNoCas =
    searchTerm.trim() !== "" &&
    filteredChemicals.length > 0 &&
    filteredChemicals.every(
      (item) => !item.cas || item.cas.length === 0
    ) &&
    !allChemicals.some((item) =>
      extractSearchableText(item)
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase())
    );

  return (
    <div className="space-y-6">
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        darkMode={darkMode}
        showingCount={showingCount}
        totalCount={totalCount}
        isNoResultButShowingNoCas={isNoResultButShowingNoCas}
      />

      {
      searchTerm.length > 0 && 
      (
        <Table
          filteredChemicals={filteredChemicals}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}
