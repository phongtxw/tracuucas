const danhmucIVA = [{
  phuluc: ["Nghị định 28/2026/NĐ-CP Quy định các danh mục chất ma túy và tiền chất",],

  note: [`CÁC CHÁT MA TÚY ĐƯỢC SỬ DỤNG HẠN CHẾ TRONG NGHIÊN CỨU, KIỂM NGHIỆM, GIÁM ĐỊNH, VÌ MỤC ĐÍCH QUỐC PHÒNG, AN NINH HOẶC TRONG LĨNH VỰC Y TẾ THEO QUY ĐỊNH
CỦA CƠ QUAN CÓ THẢM QUYỀN`], 
  data: [
      {"stt": 1, "tenchat": "1-boc-4-AP; tert-Butyl 4-(phenylamino) piperidine-1-carboxylate", "tenkhoahoc": "4-(phenylamino)-1-piperidinecarboxylic acid, 1,1 dimethylethyl ester", "cas": "125541-22-2", "ma_so_hang_hoa": "2933.39.90", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 2, "tenchat": "1-boc-4-piperidone; tert-Butyl 4-oxopiperidine-1-carboxylate", "tenkhoahoc": "1-piperidinecarboxylic acid, 4-oxo, 1,1-dimethylethyl ester", "cas": "79099-07-3", "ma_so_hang_hoa": "2933.39.90", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 3, "tenchat": "P-2-P methyl glycidic acid (BMK glycidic acid)", "tenkhoahoc": "2-oxiranecarboxylic acid, 2-methyl-3-phenyl-", "cas": "25547-51-7", "ma_so_hang_hoa": "2918.99.00", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 4, "tenchat": "P-2-P methyl glycidic acid, methyl ester", "tenkhoahoc": "Methyl 2-methyl-3-phenyl-2-oxiranecarboxylate", "cas": "80532-66-7", "ma_so_hang_hoa": "2918.99.00", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 5, "tenchat": "P-2-P methyl glycidic acid, ethyl ester", "tenkhoahoc": "Ethyl 2-methyl-3-phenyl-2-oxiranecarboxylate", "cas": "41232-97-7", "ma_so_hang_hoa": "2918.99.00", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 6, "tenchat": "P-2-P methyl glycidic acid, propyl ester", "tenkhoahoc": "Propyl 2-methyl-3-phenyl-2-oxiranecarboxylate", "cas": "", "ma_so_hang_hoa": "2918.99.00", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 7, "tenchat": "P-2-P methyl glycidic acid, isopropyl ester", "tenkhoahoc": "Isopropyl 2-methyl-3-phenyl-2-oxiranecarboxylate", "cas": "", "ma_so_hang_hoa": "2918.99.00", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 8, "tenchat": "P-2-P methyl glycidic acid, butyl ester", "tenkhoahoc": "Butyl 2-methyl-3-phenyl-2-oxiranecarboxylate", "cas": "", "ma_so_hang_hoa": "2918.99.00", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 9, "tenchat": "P-2-P methyl glycidic acid, isobutyl ester", "tenkhoahoc": "Isobutyl 2-methyl-3-phenyl-2-oxiranecarboxylate", "cas": "", "ma_so_hang_hoa": "2918.99.00", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 10, "tenchat": "P-2-P methyl glycidic acid, sec-butyl ester", "tenkhoahoc": "sec-butyl 2-methyl-3-phenyl-2-oxiranecarboxylate", "cas": "", "ma_so_hang_hoa": "2918.99.00", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 11, "tenchat": "P-2-P methyl glycidic acid, tert-butyl ester", "tenkhoahoc": "tert-butyl 2-methyl-3-phenyl-2-oxiranecarboxylate", "cas": "", "ma_so_hang_hoa": "2918.99.00", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 12, "tenchat": "3,4-MDP-2P-methyl glycidate (PMK glycidate)", "tenkhoahoc": "2-oxiranecarboxylic acid, 3-(1,3-benzodioxol-5-yl)-2-methyl-, methyl ester", "cas": "13605-48-6", "ma_so_hang_hoa": "2932.99.90", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 13, "tenchat": "3,4-MDP-2P-methyl glycidic acid (PMK glycidic acid)", "tenkhoahoc": "2-oxiranecarboxylic acid, 3-(1,3-benzo dioxol-5-yl)-2-methyl-", "cas": "2167189-50-4", "ma_so_hang_hoa": "2932.99.90", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 14, "tenchat": "3,4-MDP-2-P methyl glycidic acid, ethyl ester", "tenkhoahoc": "2-oxiranecarboxylic acid, 3-(1,3-benzodioxol-5-yl)-2-methyl-, ethyl ester", "cas": "28578-16-", "ma_so_hang_hoa": "2932.99.90", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 15, "tenchat": "3,4-MDP-2-P methyl glycidic acid, propyl ester", "tenkhoahoc": "2-oxiranecarboxylic acid, 3-(1,3-benzodioxol-5-yl)-2-methyl-, propyl ester", "cas": "", "ma_so_hang_hoa": "2932.99.90", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 16, "tenchat": "3,4-MDP-2-P methyl glycidic acid, isopropyl ester", "tenkhoahoc": "2-oxiranecarboxylic acid, 3-(1,3-benzodioxol-5-yl)-2-methyl-, isopropyl ester", "cas": "", "ma_so_hang_hoa": "2932.99.90", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 17, "tenchat": "3,4-MDP-2-P methyl glycidic acid, butyl ester", "tenkhoahoc": "2-oxiranecarboxylic acid, 3-(1,3-benzodioxol-5-yl)-2-methyl-, butyl ester", "cas": "", "ma_so_hang_hoa": "2932.99.90", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 18, "tenchat": "3,4-MDP-2-P methyl glycidic acid, isobutyl ester", "tenkhoahoc": "2-oxiranecarboxylic acid, 3-(1,3-benzodioxol-5-yl)-2-methyl-", "cas": "", "ma_so_hang_hoa": "2932.99.90", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 19, "tenchat": "3,4-MDP-2-P methyl glycidic acid, sec-butyl ester", "tenkhoahoc": "2-oxiranecarboxylic acid, 3-(1,3-benzodioxol-5-yl)-2-methyl-", "cas": "", "ma_so_hang_hoa": "2932.99.90", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 20, "tenchat": "3,4-MDP-2-P methyl glycidic acid, tert-butyl ester", "tenkhoahoc": "2-oxiranecarboxylic acid, 3-(1,3-benzodioxol-5-yl)-2-methyl-", "cas": "", "ma_so_hang_hoa": "2932.99.90", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 21, "tenchat": "4-Anilino-N-phenethylpiperidine; ANPP", "tenkhoahoc": "N-phenyl-1-(2-phenylethyl) piperidin-4-amine", "cas": "21409-26-7", "ma_so_hang_hoa": "2933.36.00", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 22, "tenchat": "4-AP", "tenkhoahoc": "N-Phenyl-4-piperidinamine", "cas": "23056-29-3", "ma_so_hang_hoa": "2933.39.90", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 23, "tenchat": "4-Piperidone", "tenkhoahoc": "piperidin-4-one", "cas": "41661-47-6", "ma_so_hang_hoa": "2933.39.90", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 24, "tenchat": "Alpha-phenylaceto acetamide, APAA", "tenkhoahoc": "3-oxo-2-phenylbutanamide", "cas": "4433-77-6", "ma_so_hang_hoa": "2924.29.90", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 25, "tenchat": "Alpha-bromo-(o-chlorophenyl)-cyclopentyl ketone", "tenkhoahoc": "Alpha-bromo-(o-chlorophenyl)-cyclopentyl ketone", "cas": "", "ma_so_hang_hoa": "2914.79.00", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 26, "tenchat": "Hydroxylimine", "tenkhoahoc": "1-hydroxycyclopentyl -(o-chlorophenyl)-ketone-N-methylimine", "cas": "6740-87-0", "ma_so_hang_hoa": "2925.29.00", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 27, "tenchat": "Methyl alpha-phenyl acetoacetate; MAPA", "tenkhoahoc": "Methyl 3-oxo-2-phenylbutanoate", "cas": "16648-44-5", "ma_so_hang_hoa": "2918.30.00", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 28, "tenchat": "Norephedrine; Phenylpropanolamine", "tenkhoahoc": "(1R,2S)-2-amino-1-phenylpropan-1-ol", "cas": "14838-15-4", "ma_so_hang_hoa": "2939.44.00", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 29, "tenchat": "Norfentanyl", "tenkhoahoc": "N-phenyl-1-piperidinyl-propanamide", "cas": "1609-66-1", "ma_so_hang_hoa": "2933.39.90", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 30, "tenchat": "N-Phenethyl-4-piperidinone; NPP", "tenkhoahoc": "1-(2-Phenylethyl) piperidine-4-one", "cas": "39742-60-4", "ma_so_hang_hoa": "2933.39.90", "co_quan_quan_ly": "Bộ Công an"},
      {"stt": 31, "tenchat": "o-Chlorophenyl cyclopentyl ketone", "tenkhoahoc": "2-Chlorophenyl cyclopentyl ketone", "cas": "6740-85-8", "ma_so_hang_hoa": "2914.79.00", "co_quan_quan_ly": "Bộ Công an"}
    ]
}]

export default danhmucIVA;