const rawData = '13,47,64,52,60,69,80,85,57,1,2,6,30,81,86,40,27,26,97,77,70,92,43,94,8,78,3,88,93,17,55,49,32,59,51,28,33,41,83,67,11,91,53,36,96,7,34,79,98,72,39,56,31,75,82,62,99,66,29,58,9,50,54,12,45,68,4,46,38,21,24,18,44,48,16,61,19,0,90,35,65,37,73,20,22,89,42,23,15,87,74,10,71,25,14,76,84,5,63,95\n' +
    '\n' +
    '88 67 20 19 15\n' +
    '22 76 86 44 73\n' +
    ' 7 42  6 69 25\n' +
    '12 68 92 21 75\n' +
    '97 45 13 52 70\n' +
    '\n' +
    '75 98 24 18 77\n' +
    '17 93 46 49 13\n' +
    '92 56 97 57 66\n' +
    '44  0 65 54 74\n' +
    '23  6 53 42 20\n' +
    '\n' +
    '92 94  9 27 41\n' +
    '73 28 62 90 40\n' +
    '78  3 12 37 32\n' +
    ' 8 86 91 16 30\n' +
    '84 38 68 11 19\n' +
    '\n' +
    '51  5 12 76 97\n' +
    '72 31 15 61 71\n' +
    '38 32 55 87 10\n' +
    '91  4 85 84 53\n' +
    '59 79 28 69 23\n' +
    '\n' +
    '35 48 10 81 60\n' +
    '25 86 24 43 15\n' +
    '44 55 12 54 62\n' +
    '94 89 95  2 23\n' +
    '64 63 45 50 66\n' +
    '\n' +
    '80 87 49 88 39\n' +
    '33 81 95 68 55\n' +
    '83 46 36 41 54\n' +
    '90 74  3 52  7\n' +
    '71 40 35  8 77\n' +
    '\n' +
    '34 21 24  8 97\n' +
    '99 23 94 70  9\n' +
    '14 98  2 11 10\n' +
    '16 38 92 13 35\n' +
    '82 25 76 42 39\n' +
    '\n' +
    '52 76 98 25  3\n' +
    '24 41 13 39 56\n' +
    '11 72 77 47 86\n' +
    '50 32 26 88 48\n' +
    '18 99 22 78 58\n' +
    '\n' +
    '22 24 53 84 80\n' +
    '26 97 42 95 11\n' +
    ' 1 59 81  7 35\n' +
    '47 14 40 63 30\n' +
    '37 31 10 50 43\n' +
    '\n' +
    '26 86 85 69 45\n' +
    '81 43 96 12 42\n' +
    ' 7 36  5 28 95\n' +
    '55 90 54  4 46\n' +
    '52 30 79 59 87\n' +
    '\n' +
    '76 87 62 13 38\n' +
    '40 44 75  2 37\n' +
    '51 22 58 84 57\n' +
    ' 1 29 82 67 35\n' +
    '39 20 31 77 32\n' +
    '\n' +
    '53 62 61 26 95\n' +
    '78 44  9  5 97\n' +
    '83 11 18 69  2\n' +
    '94 66  8 14 27\n' +
    ' 1  6  7 73 76\n' +
    '\n' +
    '87 34 62 93 43\n' +
    '49 20 63 29 22\n' +
    '30 94 11  5 69\n' +
    '74  9 89 41 37\n' +
    '98 38 72 13 97\n' +
    '\n' +
    '69 39 15 59 14\n' +
    '42 84 56 23  1\n' +
    '99 16 62 83 89\n' +
    '32 36 33 24  3\n' +
    '22 31 55 10 13\n' +
    '\n' +
    '22 44 75  3 17\n' +
    '51 79 37 59 19\n' +
    '98  4 86 35 34\n' +
    '36 20 85  5 23\n' +
    '62 92 43  7 90\n' +
    '\n' +
    ' 3 68 95 51 71\n' +
    '20 62 47  4 30\n' +
    '60 91 27 86 73\n' +
    '14 76 66 97 85\n' +
    '79 65  8 11 36\n' +
    '\n' +
    '38 63  1 64 14\n' +
    '10 52 17 90 98\n' +
    '28 61 29 20 55\n' +
    '49 58 43  3  7\n' +
    '88 81 67 32 68\n' +
    '\n' +
    '63 65 15 61 57\n' +
    '47 94  6 14 49\n' +
    '42  3 83 96 31\n' +
    '23 77  1 70 18\n' +
    '45 36 64 48 35\n' +
    '\n' +
    ' 8 92 88 32 95\n' +
    '26 41 34 11 48\n' +
    '81 35 36 62 28\n' +
    '64 33 52 97 82\n' +
    ' 7 37 78  0 86\n' +
    '\n' +
    '75 64 84 80 60\n' +
    '17  5 55 95 70\n' +
    ' 0 90 68 53 93\n' +
    ' 8 50 38  9 65\n' +
    '97 35 26 30  6\n' +
    '\n' +
    '76 87 36  5 74\n' +
    '79 94 82 48 20\n' +
    '24 88 90 62 45\n' +
    ' 9 40 78 22 68\n' +
    '73 71 35 42 66\n' +
    '\n' +
    '52 11 17  9 72\n' +
    '45 13 90  0 80\n' +
    '93 77 37 51 96\n' +
    ' 3 68 94 61  1\n' +
    '26 78 12 29 66\n' +
    '\n' +
    '49 14 74 11 48\n' +
    '73 58 54  3 40\n' +
    '90 38 62 18 26\n' +
    '53 93 19 41 94\n' +
    '35 63  7 80 68\n' +
    '\n' +
    '13 19 92 38  1\n' +
    '63 69  4 99 36\n' +
    '53 57 54 21 80\n' +
    '97 17  2 44 29\n' +
    ' 0  3 89 45 58\n' +
    '\n' +
    ' 9 26 45 57 67\n' +
    '72 10 59 79 88\n' +
    '32  2 87 42 60\n' +
    '62 98  1 93 28\n' +
    '24 99 41 44 29\n' +
    '\n' +
    '57 60 54 36 84\n' +
    '28  5 32 66 77\n' +
    '13 19 42 39 37\n' +
    '56 89 74 50 55\n' +
    ' 8 71 78  0 80\n' +
    '\n' +
    '62 38 24 44  4\n' +
    '17  8 70 77 86\n' +
    '98  6  9 88 23\n' +
    '85 63 78 60 72\n' +
    '71 48 36 69 81\n' +
    '\n' +
    '84 19  8 20 17\n' +
    '40 88 33 52 81\n' +
    '29 83 11 36 92\n' +
    '66  6 73 32 82\n' +
    '44 39 26 60 63\n' +
    '\n' +
    '13 73 45 32 42\n' +
    '69 20 83  8 84\n' +
    '82 61 11 89 25\n' +
    ' 6 92 99 52 57\n' +
    '88 22 46 26 86\n' +
    '\n' +
    '74 65 17 64 94\n' +
    '19 34 40 69 80\n' +
    '43 83 45 77 87\n' +
    '41 49 13 51 89\n' +
    '91 72 54  1 60\n' +
    '\n' +
    '38 10 16 51 46\n' +
    '80 60 64 62 70\n' +
    '89 71 58 49 39\n' +
    '37  5 35 88 40\n' +
    '93 72 98 42 13\n' +
    '\n' +
    ' 9 47 91 69 68\n' +
    '27  1 49 60 13\n' +
    ' 6 17 95 59 35\n' +
    '26 14 75 57 11\n' +
    '15 18 19 46 74\n' +
    '\n' +
    '88 66 25 89  6\n' +
    '63  4 56 73  8\n' +
    '57  0 51  5 36\n' +
    '68 96 84 67 53\n' +
    '49 82  7 32  9\n' +
    '\n' +
    '81 75 92  1 62\n' +
    ' 0 96 27 63 46\n' +
    '76 31 93 67 12\n' +
    '74 78 59  5 60\n' +
    '69 33 25 94 43\n' +
    '\n' +
    '40 72 79 58 22\n' +
    '16 24 99 96 44\n' +
    '69  4 87 90 26\n' +
    '34 43 56 15 35\n' +
    '63 88 89 52 54\n' +
    '\n' +
    '43  7 44 31 24\n' +
    '71 18 84 17 64\n' +
    ' 8 47 93 85 36\n' +
    '72 29 22 67 74\n' +
    '69 41 58 98 61\n' +
    '\n' +
    '55 21 72 14  3\n' +
    '75 12 69 91 54\n' +
    '80 40 78 39  4\n' +
    '44 88 84 76 25\n' +
    '96 57 49 52 28\n' +
    '\n' +
    '54 74 32 40 64\n' +
    ' 5 94 71 80 22\n' +
    '82 92 79 93 16\n' +
    '53 33 98 85 14\n' +
    '29 49  9 47 12\n' +
    '\n' +
    '98 67  8 10  6\n' +
    '58 13 77 99 81\n' +
    ' 5 55 21 19  1\n' +
    ' 0 26 44 70 93\n' +
    '41 96 31 91 27\n' +
    '\n' +
    '50 28 48 13 18\n' +
    '96 43 25  2 78\n' +
    '88 60  0 16 73\n' +
    '12 32 15 68 22\n' +
    '95 74 10 80 21\n' +
    '\n' +
    '18 49 85 55 21\n' +
    '11 68 80 59 41\n' +
    '56 94 14 62 60\n' +
    '32 20 40  6  2\n' +
    '42 66 98 71 17\n' +
    '\n' +
    '13 38  1 63 82\n' +
    '33 55 54 53 92\n' +
    '36 20 39 84 83\n' +
    '67 43 70 73 75\n' +
    '94 77 76 29 16\n' +
    '\n' +
    '82 27 25 18 86\n' +
    '73  3 36 28  1\n' +
    '11 96 40 23 93\n' +
    '58 90 88 35 64\n' +
    ' 9 38 69  8 43\n' +
    '\n' +
    '87 90 16 56 67\n' +
    '41 75 89  1 80\n' +
    '22 62  5 45 69\n' +
    '28 36 19 96 71\n' +
    '26 63 88 76 31\n' +
    '\n' +
    '68 80 83 95 20\n' +
    '75  0 16 38 21\n' +
    '34 89 87 36 14\n' +
    '94 47 53 73 71\n' +
    '63  8 61 96 50\n' +
    '\n' +
    '81 23  6 14 26\n' +
    '86 42 82 95 85\n' +
    '77 52 38  2 33\n' +
    '69 98 54 37  4\n' +
    '78 39  3 75 80\n' +
    '\n' +
    '92 99 93 28 44\n' +
    ' 5  8 67 45 10\n' +
    '61 79 63 85 81\n' +
    ' 2 87 76 68 18\n' +
    '69 52 22 16 12\n' +
    '\n' +
    '95 50 21 82 60\n' +
    ' 5  8  6 28 26\n' +
    '52  3 38 70 74\n' +
    '75  0 53 51 44\n' +
    '10 30 34 47 71\n' +
    '\n' +
    '71 44 65 48 51\n' +
    '78 57 75  6 86\n' +
    '95 58 66 12 92\n' +
    '22 61 68 88 50\n' +
    ' 4 36 45 28 54\n' +
    '\n' +
    '37 17  5  2 52\n' +
    '57 47  4 53 39\n' +
    '11 72 66 81 46\n' +
    '27  0 67 40 83\n' +
    '98 19 10 35 84\n' +
    '\n' +
    '43 59 30 72 17\n' +
    '66 50 12 84 65\n' +
    '49 60 14  1 29\n' +
    '89 75 62 82 47\n' +
    '33  5  9 58 45\n' +
    '\n' +
    '14  9  3 47 74\n' +
    '69 29 57 62 22\n' +
    ' 4 90 40 64 15\n' +
    '21 27 30  2 63\n' +
    '97 96 99 55 41\n' +
    '\n' +
    '75 73  3 59 80\n' +
    '65 34 52 20 72\n' +
    '50 84 81 69 41\n' +
    '97 77 19 85 39\n' +
    '88 46 15 35 87\n' +
    '\n' +
    '96 42 74 38 78\n' +
    '58 73 67 70 10\n' +
    '62  8 82 64 16\n' +
    '65 25 13  3 89\n' +
    '40 30 53 95 51\n' +
    '\n' +
    ' 7 16 92 88 38\n' +
    '14 52 46 93 64\n' +
    '49 48  8 76 51\n' +
    '97 67 89 75 19\n' +
    '69  9 29 43 82\n' +
    '\n' +
    '81 51 24 57  9\n' +
    '46 43 77 11 35\n' +
    '83  5 14 25 84\n' +
    '70 99 47 37 16\n' +
    ' 3 39 75 97 80\n' +
    '\n' +
    '18 74 64  6 94\n' +
    '12 59 46 48 31\n' +
    '73 77 33  1 39\n' +
    ' 0 69 10 24 56\n' +
    '83 66  5 76 58\n' +
    '\n' +
    '40 48 72 65  2\n' +
    '19 28 93 53 44\n' +
    '75 85 42 68 66\n' +
    '99 49 55 31 41\n' +
    '94 35 78 13 61\n' +
    '\n' +
    ' 4 20 54 33 21\n' +
    '50 61 17 53 64\n' +
    '69 30 24 90 95\n' +
    '82 51 39 52 67\n' +
    '43 73 44 62 83\n' +
    '\n' +
    '31 32 63 42 60\n' +
    '39 41 28 51 53\n' +
    '15 20 24 54  5\n' +
    ' 9 65 70 57 99\n' +
    '50 29 35  4 47\n' +
    '\n' +
    '40 99 95 72 35\n' +
    '10 14 52 83 19\n' +
    ' 5 51 87 49 16\n' +
    '60 66 13 63 93\n' +
    '68 57 31  6 78\n' +
    '\n' +
    '58 96 49 87 28\n' +
    '95 50 54 53 52\n' +
    '24 16 64  9  5\n' +
    ' 7 63  8  4 17\n' +
    '59 98  3 31 25\n' +
    '\n' +
    '31 83 61 58 93\n' +
    '94 52 97 30 98\n' +
    '99  2 13 66 73\n' +
    '69 71 68 40 19\n' +
    '74 84 45 25 77\n' +
    '\n' +
    '58 85 45 64 74\n' +
    '18 88 91 53  2\n' +
    '93  0 92 55 39\n' +
    '75 49 87 80  4\n' +
    '89 97 57 14 54\n' +
    '\n' +
    '20 92 64 50 25\n' +
    '52 90 80 31 38\n' +
    '55 54 10 76 21\n' +
    '95 97  4 77 19\n' +
    '30 26 12 39 11\n' +
    '\n' +
    '71 10 84 68 77\n' +
    '48 82 69 75  3\n' +
    '93 24 16 42 60\n' +
    '15 62 76 36 20\n' +
    '21 18 94 22 45\n' +
    '\n' +
    '10 91 66 56 75\n' +
    ' 6  8 45 59 83\n' +
    '52 93 48 81 87\n' +
    '99 78 43 64 84\n' +
    '21 12 61 71  9\n' +
    '\n' +
    '98 77 95 63 15\n' +
    '30 14 39 12 20\n' +
    '13 32 27  0  5\n' +
    '86 80 51 40 99\n' +
    '68 44 26 29 91\n' +
    '\n' +
    '92 79 49 44 33\n' +
    '88  4 34  3 90\n' +
    '51 46 31 50 47\n' +
    '61 11 94  6 24\n' +
    '72 18 98 65 57\n' +
    '\n' +
    '88 94 93 11 33\n' +
    '75 77 53 54 51\n' +
    '97 15 89 38 76\n' +
    '47 64 55 22  0\n' +
    '40 56 34 19  3\n' +
    '\n' +
    '36 55 51 86 91\n' +
    '49 21 78  6 58\n' +
    '90  1 88 45 33\n' +
    '37 69 75 41 50\n' +
    '81 24 34 38 93\n' +
    '\n' +
    '21 73 99 50 65\n' +
    '72 77 86  7 68\n' +
    '24 63 71 26 25\n' +
    ' 9 12 29 93 87\n' +
    '81 23 22 94 67\n' +
    '\n' +
    '37 47 66 89 73\n' +
    '49 23 79 31 86\n' +
    '58 52 21 39 15\n' +
    '60 38 82 50 36\n' +
    '74 30 25 35 99\n' +
    '\n' +
    ' 6 18 53 36 87\n' +
    ' 3 59 50  2 75\n' +
    '69 61 57 19 63\n' +
    '44 77 42 22  7\n' +
    '89 29 45 35 71\n' +
    '\n' +
    '28 26 53 47 21\n' +
    '31 71 27 58 85\n' +
    '10 20 74 59 42\n' +
    '89 44 12 91 54\n' +
    '32 87 36 22  7\n' +
    '\n' +
    '62 17 61 75 51\n' +
    '44 60 37 14 76\n' +
    '96  0  1 52  5\n' +
    '57 42 97 66 90\n' +
    '12 23 50 98 25\n' +
    '\n' +
    '42 30 86 89 66\n' +
    '41 98 39 29 23\n' +
    '75 73 20 79 90\n' +
    '38 60 45 16 18\n' +
    '17 10 47  5 13\n' +
    '\n' +
    ' 4 10 26 74 38\n' +
    '66 84 60 23 57\n' +
    '30 59 58  2 49\n' +
    '83 82 70 64 43\n' +
    '71 31 35 90  0\n' +
    '\n' +
    '27 99 33 56  3\n' +
    '41 97  1 68 88\n' +
    '43 63 81 89 22\n' +
    '30 32 59 64 12\n' +
    '84 58 10 39 76\n' +
    '\n' +
    '98 16 75 27 57\n' +
    ' 0  9  3 79 50\n' +
    ' 5 34 93  6 21\n' +
    '52 70 87 31 49\n' +
    '58 46 24 20 45\n' +
    '\n' +
    '78 24 19 13 30\n' +
    '83 59 79 37 72\n' +
    '84 81 99 17 77\n' +
    '10 93  3 33 70\n' +
    '29 35 49  6  5\n' +
    '\n' +
    '47  6 82 94 53\n' +
    '83 19 25 54 64\n' +
    ' 9 56 39 31 96\n' +
    ' 1 81 66 41  5\n' +
    '55 48 43 12 14\n' +
    '\n' +
    '47 55 86 31 17\n' +
    '89 45 65 34 56\n' +
    '99 88 18 97  3\n' +
    '52 21 14 68 13\n' +
    ' 9 26 22  7 32\n' +
    '\n' +
    '75 27 62 19 72\n' +
    '20 49  7 21 85\n' +
    '53 46  1 59 99\n' +
    '61 71 87 24 83\n' +
    ' 5 77 41 51 73\n' +
    '\n' +
    '57 59 82 77 52\n' +
    '99 49 81 37 54\n' +
    '70 89 23 20 90\n' +
    '31  1 21 98 66\n' +
    '86 35 46 36 18\n' +
    '\n' +
    '37 39 70 76 27\n' +
    '68 84 25  1 33\n' +
    '50 82 77 20 44\n' +
    '18 11 51 62 54\n' +
    '80 67 35 89 30\n' +
    '\n' +
    '85 96  1  3 73\n' +
    '25 47 10 46 98\n' +
    ' 2 33 91 71 35\n' +
    ' 0 32 11 55 67\n' +
    '14 81 17  5 94\n' +
    '\n' +
    '68 84 46 43 81\n' +
    '42 35 48 89 30\n' +
    ' 4 17 65 77  6\n' +
    '49 97 85 12 66\n' +
    '75 25 13 90 51\n' +
    '\n' +
    '94 42 46 58 56\n' +
    '97 50 86 84 15\n' +
    '52  9 28 32 59\n' +
    '26 96 91 57 83\n' +
    '29 99 18 31 43\n' +
    '\n' +
    ' 2 19 31 10 32\n' +
    '81 16 50 59  7\n' +
    '76 30 63 44 95\n' +
    '82 54 61 75 36\n' +
    '85 78 12 67  9\n' +
    '\n' +
    '92  1 72 27 37\n' +
    '22 13 91  4 34\n' +
    '53 82 76 70 19\n' +
    '99 38 59 33 52\n' +
    ' 0 61 36 67 75\n' +
    '\n' +
    '94 41  5 57  1\n' +
    '37 36 99 34 47\n' +
    '40 93 62 32 76\n' +
    '61 75 48 42 73\n' +
    '35 69 54 13 50\n' +
    '\n' +
    '76 12 51 11 74\n' +
    '30 83 73 33 78\n' +
    '95 77 15 14 80\n' +
    '86 37 91 50 10\n' +
    '52 67  3 60 17\n' +
    '\n' +
    '68  7 42 81 15\n' +
    '46 58  9 31 18\n' +
    '91  1 28 34 37\n' +
    '17 57  6  2 70\n' +
    '97 54 20 27 44\n' +
    '\n' +
    '44 80 45 28 14\n' +
    '94 47 29 50 54\n' +
    '64 67 96 95 93\n' +
    '76 36 82 39 43\n' +
    '30 55 97  3  2\n' +
    '\n' +
    '43  2 15 99 34\n' +
    '97 75 26  9 67\n' +
    '30 63 74 12 82\n' +
    '18  6 49 48 55\n' +
    '47 36 41 56 83\n' +
    '\n' +
    '26 70 87 80 89\n' +
    '17 50 61 21 96\n' +
    '43 83 85 46 64\n' +
    '66 75 23 47 69\n' +
    '22 72 55 52  8\n' +
    '\n' +
    '67 54 11 29 42\n' +
    '16 45 56 86 66\n' +
    ' 4 80 43 72 91\n' +
    '90 87 63 39 50\n' +
    '32  6 59 27 89\n' +
    '\n' +
    '14 92 78 47 59\n' +
    '98  0 63 85 31\n' +
    '52  8 84 70 91\n' +
    '43  3 76 65 57\n' +
    '87 22 99 94 58\n' +
    '\n' +
    '26 53 58 52  1\n' +
    '82 57 32 40 20\n' +
    '72 21 74 46 43\n' +
    '41 15 98  2 11\n' +
    ' 5 96 22 18 55\n';

const numbers = rawData.split('\n\n')[0].split(',').map(Number);
const matrices = rawData.split('\n\n').slice(1, -1).map(matrixStr => {
    const matrixRowsArr = matrixStr.split('\n');

    return  matrixRowsArr.map(rowStr => rowStr.split(' ').filter(Boolean).map(Number));
});

const getMatricesMap = () => matrices.map(matrix => {
    const matrixMap = {};

    for (let i = 0; i < matrix.length; i++) {
        matrixMap[`row_${i}`] = {
            origin: [],
            result: [],
        };

        for (let j = 0; j < matrix[0].length; j++) {
            if (i === 0) {
                matrixMap[`col_${j}`] = {
                    origin: [],
                    result: [],
                };
            }

            matrixMap[`row_${i}`].origin.push(matrix[i][j]);
            matrixMap[`col_${j}`].origin.push(matrix[i][j]);

            matrixMap[`row_${i}`].result.push(matrix[i][j]);
            matrixMap[`col_${j}`].result.push(matrix[i][j]);
        }
    }

    return matrixMap;
});

(() => {
    const matricesMap = getMatricesMap();

    for(const num of numbers) {
        for (const matrixMap of matricesMap) {
            for(const [key, val] of Object.entries(matrixMap)) {
                matrixMap[key].result = val.result.filter(bingoNum => bingoNum !== num);

                if (matrixMap[key].result.length === 0) {
                    const matrixResult =  Object.entries(matrixMap).reduce((res, [currKey, { result }]) => {
                        const [directionName] = currKey.split('_');
                        if (currKey === key || !key.includes(directionName)) {
                            return res;
                        }

                        return result.reduce((acc, next) => acc + next, res);
                    }, 0);

                    console.log('matrixResult', matrixResult);
                    console.log('num', num);
                    console.log('result', matrixResult * num);
                    return;
                }
            }
        }
    }
})();